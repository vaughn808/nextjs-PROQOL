import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Questions from './Questions';

import CardScore from './CardScore';
import CatDescriptions from './CatDescriptions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [burnVal, setBurnVal] = useState(0);

  const totBurnVal = burnVal === 0 ? burnVal : totalBurnAmt();

  function totalBurnAmt(totBurnVal) {
    console.log('I was called');
    console.log(totBurnVal + burnVal)
    return totBurnVal + burnVal;
  }

  const text = [
    {'question_nbr' : 1, 'question' : '* I am happy.','que_category' : 'b'},
    {'question_nbr' : 2, 'question' : 'I am preoccupied with more than one person I [help].','que_category' : 't'},
    {'question_nbr' : 3, 'question' : 'I get satisfaction from being able to [help] people.','que_category' : 'c'},
    {'question_nbr' : 4, 'question' : '* I feel connected to others.','que_category' : 'b'},
    {'question_nbr' : 5, 'question' : 'I jump or am startled by unexpected sounds.','que_category' : 't'},
    {'question_nbr' : 6, 'question' : 'I feel invigorated after working with those I [help].','que_category' : 'c'},
    {'question_nbr' : 7, 'question' : 'I find it difficult to separate my personal life from my life as a [helper].','que_category' : 't'},
    {'question_nbr' : 8, 'question' : 'I am not as productive at work because I am losing sleep over traumatic experiences of a person I [help].','que_category' : 'b'},
    {'question_nbr' :  9,'question' : 'I think that I might have been affected by the traumatic stress of those I [help].','que_category' : 't'},
    {'question_nbr' : 10, 'question' : 'I feel trapped by my job as a [helper].','que_category' : 'b'},
    {'question_nbr' : 11, 'question' : 'Because of my [helping], I have felt "on edge" about various things.','que_category' : 't'},
    {'question_nbr' : 12, 'question' : 'I like my work as a [helper].','que_category' : 'c'},
    {'question_nbr' : 13, 'question' : 'I feel depressed because of the traumatic experiences of the people I [help].','que_category' : 't'},
    {'question_nbr' : 14, 'question' : 'I feel trapped by my job as a [helper].','que_category' : 't'},
    {'question_nbr' : 15, 'question' : '* I feel as though I am experiencing the trauma of someone I have [helped].','que_category' : 'b'},
    {'question_nbr' : 16, 'question' : 'I have beliefs that sustain me.','que_category' : 'c'},
    {'question_nbr' : 17, 'question' : '* I am pleased with how I am able to keep up with [helping] techniques and protocols.','que_category' : 'b'},
    {'question_nbr' : 18, 'question' : 'I am the person I always wanted to be.','que_category' : 'c'},
    {'question_nbr' : 19, 'question' : 'My work makes me feel satisfied.','que_category' : 'b'},
    {'question_nbr' : 20, 'question' : 'I feel worn out because of my work as a [helper].','que_category' : 'c'},
    {'question_nbr' : 21, 'question' : 'I have happy thoughts and feelings about those I [help] and how I could help them.','que_category' : 'b'},
    {'question_nbr' : 22, 'question' : 'I feel overwhelmed because my case [work] load seems endless.','que_category' : 'c'},
    {'question_nbr' : 23, 'question' : 'I believe I can make a difference through my work.','que_category' : 't'},
    {'question_nbr' : 24, 'question' : 'I avoid certain activities or situations because they remind me of frightening experiences of the people I [help].','que_category' : 'c'},
    {'question_nbr' : 25, 'question' : 'I am proud of what I can do to [help].','que_category' : 't'},
    {'question_nbr' : 26, 'question' : 'As a result of my [helping], I have intrusive, frightening thoughts.','que_category' : 'b'},
    {'question_nbr' : 27, 'question' : 'I feel "bogged down" by the system.','que_category' : 'c'},
    {'question_nbr' : 28, 'question' : 'I have thoughts that I am a "success" as a [helper].','que_category' : 't'},
    {'question_nbr' : 29, 'question' : "* I can't recall important parts of my work with trauma victims.",'que_category' : 'b'},
    {'question_nbr' : 30, 'question' : 'I am a very caring person.','que_category' : 'c'},
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={10}>
        {text.map((txt, index) => (
          <Questions QuestionValue={burnVal} onQuestionValueChange = {setBurnVal} actQues = {txt.question}  queId = {'queId' + index.toString()} queVal = {txt.question.includes("*") ? 'burn' : 'norm'}/>
        ))
        }
        </Grid>
        <Grid item xs />
      </Grid>
      <span>{burnVal}</span>
      <span>{totalBurnAmt}</span>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={10}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        </Grid>
        <Grid item xs />
      </Grid>
      <Grid container direction="row" spacing={3} justify="space-evenly">
        <Grid item xs={2} sm={2} md lg={1}/>
        <Grid item xs={8} sm md={10}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <CardScore tblTitle='Compassion Satisfaction' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardScore tblTitle='Burnout' />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CardScore tblTitle='Secondary Traumatic Stress' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={2} md lg={2}/>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={10}>
          <CatDescriptions />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}