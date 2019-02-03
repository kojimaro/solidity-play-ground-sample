import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Submit from './Submit';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'centar',
    },
    text: {
        color: '#fff'
    }
})

const ResultView = props => {
    const { classes, isCorrect, saveAchievement} = props;

    return(
        <div className={classes.root} style={{display:isCorrect === null ? 'none':'block'}}>
            <Typography variant="h5" className={classes.text} style={{display:isCorrect ? 'none':'block'}}>
                > 不正解です！
            </Typography>
            <div style={{display:isCorrect ? 'block':'none'}}>
                <Typography variant="h6" className={classes.text}>
                    > おめでとうございます！
                </Typography>
                <Typography variant="h6" className={classes.text}>
                    > 実績をブロックチェーンに記録することができます！
                </Typography>
                <Submit
                    variant="contained"
                    color="inherit"
                    label="実績をブロックチェーンに記録する"
                    onClick={saveAchievement}
                    fullWidth={true}
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(ResultView)