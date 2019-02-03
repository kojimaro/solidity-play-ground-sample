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

const AnswerButton = props => {
    const { classes, handleSubmit } = props;

    return(
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={12}>
                    <Submit
                        variant="contained"
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

export default withStyles(styles)(AnswerButton)