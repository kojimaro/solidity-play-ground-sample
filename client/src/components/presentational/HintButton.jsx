import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Submit from "./Submit";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
})

const HintButton = props => {
    const { classes, showAnswer } = props;

    return(
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Submit
                        variant="contained"
                        color="secondary"
                        label="答えを見る"
                        onClick={showAnswer}
                        fullWidth={true}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(HintButton)