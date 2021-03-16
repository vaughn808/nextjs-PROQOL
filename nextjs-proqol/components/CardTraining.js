import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    backgroundColor: '#c8e6c9',
    textAlign: 'center'
  },
  back: {
    backgroundColor: '#eeeeee',
  },
});


export default function TrainingCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader className={classes.title} title={
         <Typography gutterBottom variant="h6" component="h6">
            {props.title}
         </Typography>
      } />
      <CardContent className={classes.back}>
        <Typography background="textSecondary" variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary" rel="noopener" rel="noreferrer" target="_blank" href={props.btnLink}>Learn More</Button>
      </CardActions>
    </Card>
  );
}