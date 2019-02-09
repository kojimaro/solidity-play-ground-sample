import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Submit from './Submit';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    text: {
        color: '#000'
    }
})

const ResultView = props => {
    const { classes, isCorrect, saveAchievement} = props;

    return(
        <div style={{display:isCorrect === null ? 'none':'block'}}>
            <Typography component='p' className={classes.text} style={{display:isCorrect ? 'none':'block'}}>
                残念、不正解です！
            </Typography>
            <div style={{display:isCorrect ? 'block':'none'}}>
                <Typography component='p' className={classes.text}>
                    おめでとうございます！
                    実績をブロックチェーンに記録することができます！
                </Typography>
                <Submit
                    variant="outlined"
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