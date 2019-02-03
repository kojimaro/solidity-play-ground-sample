import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Monaco from '../presentational/Monaco';
import MonacoDiff from '../presentational/MonacoDiff';
import AnswerButton from '../presentational/AnswerButton';
import HintButton from '../presentational/HintButton';
import SimpleStorageCode from '../../code/SimpleStorageCode';
import Input from '../../code/Input';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100%'
    },
    editorWrapper: {
        height: '100%',
        marginBottom: theme.spacing.unit
    },
    diffWrapper: {
        height: '100%',
        marginTop: theme.spacing.unit
    },
    height100: {
        height: '100%'
    },
    height50: {
        height: '50%'
    }
})

class Editor extends Component {
    state = {
        editor: null,
        answer: '',
    }
    
    editorDidMount = (editor, monaco) => {
        console.log('editorDidMount', editor);
        editor.focus();
        this.setState({editor, answer: Input})
    }

    diffDidMount = (editor, monaco) => {
        console.log('diffDidMount', editor);
        editor.focus();
    }
    
    handleChange = (value, e) => {
        //console.log('onchange:', value, e)
    }

    handleDiffChange = (value, e) => {
        //console.log('DiffChange:', value, e)
    }

    handleSubmit = event => {
        //console.log(this.state.editor.getValue())
        event.preventDefault();
        if(this.state.editor.getValue() === SimpleStorageCode) {
            console.log('OK!')
            this.props.isCorrect(true)
        } else {
            this.setState({answer: this.state.editor.getValue()})
            this.props.isCorrect(false)
        }
    }

    showAnswer = () => {
        console.log("show");
    }

    render() {
        const { classes } = this.props;

        const options = {
            selectOnLineNumbers: false
        };

        const diffOptions = {
            renderSideBySide: false
        }

        return(
            <div className={classes.root}>
                <Grid container className={classes.height100}>
                    <Grid item xs={12} className={classes.height50}>
                        <Paper className={classes.editorWrapper}>
                            <Monaco
                                width="100%"
                                height="80%"
                                language="solidity"
                                value={Input}
                                options={options}
                                onChange={this.handleChange}
                                editorDidMount={this.editorDidMount}
                            />
                            <AnswerButton handleSubmit={this.handleSubmit}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} className={classes.height50}>
                        <Paper className={classes.diffWrapper}>
                            <MonacoDiff
                                width="100%"
                                height="80%"
                                language="javascript"
                                original={this.state.answer}
                                modified={SimpleStorageCode}
                                options={diffOptions}
                                onChange={this.handleDiffChange}
                                editorDidMount={this.diffDidMount}
                            />
                            <HintButton showAnswer={this.showAnswer}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Editor);