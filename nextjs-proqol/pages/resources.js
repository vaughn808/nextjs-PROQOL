import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(6),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    heading: {
      justify:'space-evenly',
      paddingTop: theme.spacing(4),
    },
    btn: {
        maxWidth: '30px',
        minWidth: '30px',
    }
    }));

  const resouces = () => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Grid className={classes.heading} container spacing={3}>
            <Grid item sm />
            <Grid item xs={3} sm={2}>
                
                <Button size="small" onClick={() => { alert('clicked') }}>Programs</Button>
                
            </Grid>
            <Grid item xs={3} sm={2}>
                
                    <Button className={classes.btn} size="small" onClick={() => { alert('clicked') }}>Books</Button>
                
            </Grid>
            <Grid item xs={3} sm={2}>
                
                    <Button className={classes.btn} size="small" onClick={() => { alert('clicked') }}>People</Button>
                
            </Grid>
            <Grid item sm />
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs />
            <Divider />
            tester
            <Grid item xs />
        </Grid>
    </div>
)
}

export default resouces
