import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
      };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography 
                color = 'textPrimary'
                >
                    {props.actQues}
                </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Please select a value</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={curQues}
                    onChange={handleChange}
                    >
                    <MenuItem value={1}>1 - Never</MenuItem>
                    <MenuItem value={2}>2 - Rarely</MenuItem>
                    <MenuItem value={3}>3 - Sometimes</MenuItem>
                    <MenuItem value={4}>4 - Often</MenuItem>
                    <MenuItem value={5}>5 - Very Often</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </div>
    )
}


