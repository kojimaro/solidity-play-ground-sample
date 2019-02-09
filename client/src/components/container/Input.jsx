import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import AvatorHeader from '../presentational/AvatorHeader';

const styles = theme => ({
    commentary: {
        padding: '1%',
    }
})

class Input extends Component {
    render(){
        const { classes } = this.props;

        return(
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <AvatorHeader
                            label="Recipe"
                            src="https://pbs.twimg.com/profile_images/1030659217315704833/hZKnb7hm_400x400.jpg"
                            subheader="プログラミング講師 Lv.1"
                            title="こじりょー"/>
                    </Card>
                </Grid>
                <Grid item xs={12} className={classes.commentary}>
                    <h2>読み込みと書き込み</h2>
                    <p>関数内で宣言された値はmemoryへ保存されます。</p>
                    <p>一方で関数外で宣言された値はstorageへ保存されます。</p>
                    <p>このstorageへ保存された値はブロックチェーンに記録されます。</p>
                    <p>試しになんらかの数値をブロックチェーンに記録する処理を書いていきましょう！</p>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(Input);