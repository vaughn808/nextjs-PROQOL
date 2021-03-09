import React from 'react';
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
  const norQueVal = [1,2,3,4,5];
  const burnQueVal = [5,4,3,2,1];
  const CardTitle = ['Compassion Satisfaction', 'Burnout', 'Secondary Traumatic Stress'];

  const text = [
    {'question' : '* I am happy.'},
    {'question' : 'I am preoccupied with more than one person I [help].'},
    {'question' : 'I get satisfaction from being able to [help] people.'},
    {'question' : '* I feel connected to others.'},
    {'question' : 'I jump or am startled by unexpected sounds.'},
    {'question' : 'I feel invigorated after working with those I [help].'},
    {'question' : 'I find it difficult to separate my personal life from my life as a [helper].'},
    {'question' : 'I am not as productive at work because I am losing sleep over traumatic experiences of a person I [help].'},
    {'question' : 'I think that I might have been affected by the traumatic stress of those I [help].'},
    {'question' : 'I feel trapped by my job as a [helper].'},
    {'question' : 'Because of my [helping], I have felt "on edge" about various things.'},
    {'question' : 'I like my work as a [helper].'},
    {'question' : 'I feel depressed because of the traumatic experiences of the people I [help].'},
    {'question' : 'I feel trapped by my job as a [helper].'},
    {'question' : '* I feel as though I am experiencing the trauma of someone I have [helped].'},
    {'question' : 'I have beliefs that sustain me.'},
    {'question' : '* I am pleased with how I am able to keep up with [helping] techniques and protocols.'},
    {'question' : 'I am the person I always wanted to be.'},
    {'question' : 'My work makes me feel satisfied.'},
    {'question' : 'I feel worn out because of my work as a [helper].'},
    {'question' : 'I have happy thoughts and feelings about those I [help] and how I could help them.'},
    {'question' : 'I feel overwhelmed because my case [work] load seems endless.'},
    {'question' : 'I believe I can make a difference through my work.'},
    {'question' : 'I avoid certain activities or situations because they remind me of frightening experiences of the people I [help].'},
    {'question' : 'I am proud of what I can do to [help].'},
    {'question' : 'As a result of my [helping], I have intrusive, frightening thoughts.'},
    {'question' : 'I feel "bogged down" by the system.'},
    {'question' : 'I have thoughts that I am a "success" as a [helper].'},
    {'question' : "* I can't recall important parts of my work with trauma victims."},
    {'question' : 'I am a very caring person.'},
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs />
        <Grid item xs={10}>
        {text.map((txt, index) => (
          <Questions actQues = {txt.question}  queVal = {txt.question.includes("*" ? norQueVal : burnQueVal)}/>
        ))
        }
        </Grid>
        <Grid item xs />
      </Grid>
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