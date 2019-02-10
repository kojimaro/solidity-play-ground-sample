import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ConsoleCard from '../presentational/ConsoleCard';
import ContractCard from '../presentational/ContractCard';

const styles = theme => ({
})

class Output extends Component {
    state = {
        rpcUrl: 'http://127.0.0.1:7545'
    }

    handleChange = event => {
        if(event.target.value.match(/[\s\t]/)) return;
        this.setState({rpcUrl: event.target.value})
    }

    handleSubmit = () => {
        this.props.deploy(this.state.rpcUrl)
    }

    render(){
        const { classes, isCorrect } = this.props;

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
                    <ContractCard />
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(Output);