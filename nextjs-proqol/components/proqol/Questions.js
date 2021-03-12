import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin : theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 175,
      },
  }));

export default function Questions(props) {
    const classes = useStyles();
    const [curQues, setQue] = React.useState('');

    const handleChange = (event) => {
        setQue(event.target.value);
        props.onQuestionValueChange([props.quesNbr, props.quesType, event.target.value ]);
      };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography 
                color = 'textPrimary'
                >
                    {props.actQues}
                </Typography>
                <FormControl fullWidth className={classes.formControl}>
                    <TextField
                      id="outlined-select-currency"
                      fullWidth
                      select
                      label="Select"
                      value={curQues}
                      onChange={handleChange}
                      helperText="Please select your response"
                      variant="outlined"
                      error={props.chkError && curQues === '' ? true : false}
                    >
                      <MenuItem key={props.queId + '_1'} value={props.queVal === 'norm' ? 1 : 5}>1 - Never</MenuItem>
                      <MenuItem key={props.queId  + '_2'} value={props.queVal === 'norm' ? 2 : 4}>2 - Rarely</MenuItem>
                      <MenuItem key={props.queId  + '_3'} value={3}>3 - Sometimes</MenuItem>
                      <MenuItem key={props.queId + '_4'} value={props.queVal === 'norm' ? 4 : 2}>4 - Often</MenuItem>
                      <MenuItem key={props.queId + '_5'} value={props.queVal === 'norm' ? 5 : 1}>5 - Very Often</MenuItem>
                    </TextField>
                </FormControl>
            </Paper>
        </div>
    )
}


