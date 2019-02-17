import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextForm from './TextForm';
import Submit from './Submit';

const styles = theme =>({
    form: {
        marginBottom: theme.spacing.unit
    },
    console: {
        height: '100px',
        overflow: 'auto',
        backgroundColor: '#1e1e1e',
        marginBottom: theme.spacing.unit,
        padding: theme.spacing.unit
    }
})

const ContractCard = props => {
    const { classes, txInterface, result } = props;

    return(
        <Card>
            <CardHeader
                title="コントラクト"/>
            <CardContent>
                <div className={classes.console}>
                    {result.map((log, index)=>{
                        return(
                            <Typography component='p' noWrap={true} key={index} color="secondary">
                                {log}
                            </Typography>
                        )
                    })}
                </div>
                {txInterface.map((method, index)=>getTextField(method, index, props))}
            </CardContent>
        </Card>
    );
}

const getTextField = (method, methodId, props) => {
    const { classes, handleSubmit, handleChange } = props

    return(
        <div key={methodId} className={classes.form}>
            <Submit
                variant="contained"
                color="default"
                label={method.name}
                onClick={handleSubmit}
                fullWidth={true}
                dataId={methodId}
            />
            {method.inputs.map((input, index)=>{
                return(
                    <div key={index}>
                        <TextForm
                            type='text'
                            label={input.name}
                            id={index.toString()}
                            value={input.value}
                            onChange={handleChange}
                            variant='outlined'
                            margin='dense'
                            dataId={methodId}
                            placeholder={input.type}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default withStyles(styles)(ContractCard);