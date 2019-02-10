import React from "react";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextForm from './TextForm';
import Submit from './Submit';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        marginBottom: theme.spacing.unit,
    }
})

const ConsoleCard = props => {
    const {
        classes,
        handleChange,
        handleSubmit,
        isCorrect,
        rpcUrl
    } = props;

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    コンソール
                </Typography>
                <div style={{visibility:isCorrect === null ? 'hidden':'visible'}}>
                    <Typography component='p' className={classes.text} style={{display:isCorrect ? 'none':'block'}}>
                        残念、不正解です！
                    </Typography>

                    <div style={{visibility:isCorrect ? 'visible':'hidden'}}>
                        <TextForm
                            type='text'
                            label='Web3 Provider Endpoint'
                            id='web3-provider-endpoint'
                            value={rpcUrl}
                            onChange={handleChange}
                            variant='outlined'
                            margin='normal'
                        />
                        <Submit
                            variant="outlined"
                            color="primary"
                            label="デプロイ"
                            onClick={handleSubmit}
                            fullWidth={true}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(ConsoleCard);