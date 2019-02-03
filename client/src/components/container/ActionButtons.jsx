import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Submit from "../presentational/Submit";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }
})

const ActionButtons = props => {
    const { classes, handleSubmit } = props;

    return(
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={6}>
                    <Submit
                        variant="contained"
                        color="primary"
                        label="答え合せ"
                        handleClick={handleSubmit}
                        fullWidth={false}
                    />
                </Grid>
                <Grid item xs={6} className={classes.positinCenter}>
                    <Submit
                        variant="contained"
                        color="primary"
                        label="答えをみる"
                        handleClick={handleSubmit}
                        fullWidth={false}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(ActionButtons)