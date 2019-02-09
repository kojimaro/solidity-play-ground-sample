import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Monaco from '../presentational/Monaco';
import MonacoDiff from '../presentational/MonacoDiff';
import EditorButtons from './EditorButtons';
import SimpleStorageCode from '../../code/SimpleStorageCode';
import Input from '../../code/Input';

const styles = theme => ({
    editorWrapper: {
        height: '60%',
        position: 'relative'
    },
    diffWrapper: {
        height: '40%',
    },
    button: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    height100 : {
        height: '100%'
    }
})

class Editor extends Component {
    state = {
        editor: null,
        answer: '',
    }
    
    editorDidMount = (editor, monaco) => {
        //console.log('editorDidMount', editor);
        editor.focus();
        this.setState({editor, answer: Input})
    }

    diffDidMount = (editor, monaco) => {
        //console.log('diffDidMount', editor);
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
            <Grid container className={classes.height100}>
                <Grid item xs={12} className={classes.editorWrapper}>
                    <Monaco
                        width="100%"
                        height="100%"
                        language="solidity"
                        value={Input}
                        options={options}
                        onChange={this.handleChange}
                        editorDidMount={this.editorDidMount}
                    />
                    <div className={classes.button}>
                        <EditorButtons handleSubmit={this.handleSubmit} showAnswer={this.showAnswer}/>
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.diffWrapper}>
                    <MonacoDiff
                        width="100%"
                        height="100%"
                        language="javascript"
                        original={this.state.answer}
                        modified={SimpleStorageCode}
                        options={diffOptions}
                        onChange={this.handleDiffChange}
                        editorDidMount={this.diffDidMount}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Editor);