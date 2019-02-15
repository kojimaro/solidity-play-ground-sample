import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ConsoleCard from '../presentational/ConsoleCard';
import ContractCard from '../presentational/ContractCard';
import { ethers } from 'ethers';

class Output extends Component {
    state = {
        rpcUrl: 'http://127.0.0.1:7545',
        methodIdentifiers: {},
        txInterface: []
    }

    handleChange = event => {
        if(event.target.value.match(/[\s\t]/)) return;
        this.setState({rpcUrl: event.target.value})
    }

    handleSubmit = event => {
        this.deploy()
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
                signature: contract.evm.methodIdentifiers[methodName],
                stateMutability: method.stateMutability
            })
            return txInterface
        })

        console.log(txInterface)
        this.setState({
            txInterface: this.state.methods.concat(txInterface)
        })
    }

    changeArgument = event => {
        if(event.target.value.match(/[\s\t]/)) return;

        let methodId = Number(event.target.parentElement.parentElement.dataset.id)
        let inputId = Number(event.target.id)

        let methods = this.state.methods.concat()
        let args = [...methods[methodId].inputs]
        args[inputId].value = event.target.value

        methods[methodId].args = args
        this.setState({methods}, console.log(this.state.methods))
    }

    getMethod = event => {
        let methodId = event.target.parentElement.dataset.id
    }

    runTransaction = async(method, inputs) => {
    }

    render(){
        const { isCorrect } = this.props

        return(
            <Grid container>
                <Grid item xs={12}>
                    <ConsoleCard 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        isCorrect={isCorrect}
                        rpcUrl={this.state.rpcUrl}/>
                </Grid>
                <Grid item xs={12}>
                    <ContractCard 
                        handleChange={this.changeArgument}
                        handleSubmit={this.getMethod}
                        txInterface={this.state.txInterface}/>
                </Grid>
            </Grid>
        );
    };
}

export default Output;