import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Switch } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

function createData(name) {
  return { name };
}

const rows = [
  createData('Compassion Satisfaction'),
  createData('Burnout'),
  createData('Secondary Traumatic Stress'),
];

export default function YourScoreTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Category</TableCell>
            <TableCell align="center">Your Score</TableCell>
            <TableCell align="center">Your Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow hover key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name === 'Compassion Satisfaction' ? props.compassionScore : row.name === 'Burnout' ? props.burnScore : props.traumaScore}</TableCell>
              <TableCell align="center">{row.name === 'Compassion Satisfaction' ? props.compassionGrade : row.name === 'Burnout' ? props.burnGrade : props.traumaGrade}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}