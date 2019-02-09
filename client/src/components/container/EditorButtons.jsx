import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Submit from "../presentational/Submit";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing.unit
    }
})

const EditorButtons = props => {
    const { classes, handleSubmit, showAnswer } = props;

    return(
        <div className={classes.container}>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <Submit
                        variant="outlined"
                        color="secondary"
                        label="回答を見る"
                        onClick={showAnswer}
                        fullWidth={true}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Submit
                        variant="outlined"
                        color="primary"
                        label="答え合せ"
                        onClick={handleSubmit}
                        fullWidth={true}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(EditorButtons)