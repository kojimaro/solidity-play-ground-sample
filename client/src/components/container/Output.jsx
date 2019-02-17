import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ConsoleCard from '../presentational/ConsoleCard';
import ContractCard from '../presentational/ContractCard';
import { ethers } from 'ethers';
import getJsonRpc from '../../utils/getJsonRpc';
import decodePrameters from '../../utils/decode';

class Output extends Component {
    state = {
        rpcUrl: 'http://127.0.0.1:7545',
        signerAddress: '',
        ontractAddress: '',
        txInterface: [],
        result: [],
    }

    handleChange = event => {
        if(event.target.value.match(/[\s\t]/)) return;
        this.setState({rpcUrl: event.target.value})
    }

    deploy = async() => {
        if(this.props.isCorrect !== true) return;

        const { contracts } = this.props.compiledCode;

        try {
            let provider = new ethers.providers.JsonRpcProvider(this.state.rpcUrl)
            let accounts = await provider.listAccounts()
            let signer = provider.getSigner(accounts[0])
            let factory =  ethers.ContractFactory.fromSolidity(
                contracts['test.sol'].SimpleStorage,
                signer
            );

            const deployer = await factory.deploy()
            await deployer.deployed()

            await this.generateTxInterface(contracts['test.sol'].SimpleStorage)

            this.setState({
                signerAddress: signer._address, 
                contractAddress: deployer.address
            })
        } catch (error) {
            alert(`Failed.`);
        }
    }

    generateTxInterface = async(contract) => {
        let txInterface = []
        await contract.abi.map((method, index) => {
            var methodName;
            let args = []

            if (method.inputs.length > 0) {
                methodName = method.name + '('

                for(var i=0; i < method.inputs.length; i++) {
                    let type = method.inputs[i].type
                    methodName = methodName + type + ','

                    args.push({
                        name:method.inputs[i].name, 
                        type:method.inputs[i].type, 
                        value:''
                    })
                }

                methodName = methodName.replace(/,$/, ')')
            } else {
                methodName = method.name + '()'
            }

            txInterface.push({
                name:methodName, 
                inputs:args,
                outputs: method.outputs,
                signature: contract.evm.methodIdentifiers[methodName],
                stateMutability: method.stateMutability
            })
            return txInterface
        })

        this.setState({
            txInterface: this.state.txInterface.concat(txInterface)
        })
    }

    changeArgument = event => {
        if(event.target.value.match(/[\s\t]/)) return;

        let methodId = Number(event.target.parentElement.parentElement.dataset.id)
        let inputId = Number(event.target.id)

        let txInterface = this.state.txInterface.concat()
        let inputs = [...txInterface[methodId].inputs]
        inputs[inputId].value = event.target.value

        txInterface[methodId].iputs = inputs
        this.setState({txInterface}, console.log(this.state.txInterface))
    }

    runTransaction = async(event) => {
        const { rpcUrl, txInterface } = this.state

        let methodId = Number(event.target.parentElement.dataset.id)

        let params = {
            from: this.state.signerAddress,
            to: this.state.contractAddress,
            data: txInterface[methodId], 
            value: ''
        }

        const rpc = getJsonRpc(params)

        let response = await fetch(rpcUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: rpc
        });

        var { result } = await response.json()

        if(txInterface[methodId].outputs.length > 0) {
            result = JSON.stringify(decodePrameters(txInterface[methodId].outputs, result))
        }

        this.setState({result: this.state.result.concat([result])})
    }

    render(){
        const { isCorrect } = this.props

        return(
            <Grid container>
                <Grid item xs={12}>
                    <ConsoleCard 
                        handleChange={this.handleChange}
                        handleSubmit={this.deploy}
                        isCorrect={isCorrect}
                        rpcUrl={this.state.rpcUrl}/>
                </Grid>
                <Grid item xs={12}>
                    <ContractCard 
                        handleChange={this.changeArgument}
                        handleSubmit={this.runTransaction}
                        txInterface={this.state.txInterface}
                        result={this.state.result}/>
                </Grid>
            </Grid>
        );
    };
}

export default Output;