import React, { Component } from "react";
import IssueContract from "./contracts/Issue.json";
import getWeb3 from "./utils/getWeb3";
import { withStyles } from '@material-ui/core/styles';
import './components/container/Editor';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Editor from "./components/container/Editor";
import Input from './components/container/Input';
import ResultView from './components/presentational/ResultView';
import SimpleStorageCode from './code/SimpleStorageCode';

import "./App.css";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        height: '100%'
    },
    boxCommon: {
        height: '100%'
    },
    height100: {
        height: '100%'
    }
})

class App extends Component {
  state = { 
      web3: null, 
      accounts: null, 
      contract: null,
      isCorrect: null
    };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = IssueContract.networks[networkId];
      const instance = new web3.eth.Contract(
        IssueContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  isCorrect = result => this.setState({isCorrect: result})

  saveAchievement = async() => {
      const { accounts, contract } = this.state;
      const timestamp = new Date().getTime() / 1000;

      const response = await contract.methods.write(
          0x9E8b0dB8780Bb92a5Ea71bD153d505B8b10Fe2Fd,
          'YamadaTarou',
          'ブロックチェーンへの記録処理',
          'Ethereumブロックチェーンへの書き込み処理を実装しました！',
          timestamp.toString()
      ).send({from:accounts[0]});

      console.log(response.events.Transfer.returnValues)
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container className={classes.height100} spacing={16}>
                <Grid item xs={4}>
                    <Paper className={classes.boxCommon}>
                        <Input/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.boxCommon}>
                        <Editor isCorrect={this.isCorrect}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.boxCommon}>
                        <ResultView 
                            isCorrect={this.state.isCorrect}
                            saveAchievement={this.saveAchievement}
                            code={SimpleStorageCode}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default withStyles(styles)(App);