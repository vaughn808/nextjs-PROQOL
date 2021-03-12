import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Questions from './Questions';

import CardScore from './CardScore';
import CatDescriptions from './CatDescriptions';
import TableScore from './TableScore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  sect: {
    backgroundColor: '#eeeeee',
  },
  tableScore: {
    padding: theme.spacing(6),
  },
}));

const saveQue = Array(30).fill(null);

export default function AutoGrid() {
  const classes = useStyles();
  const [quesVal, setQuesVal] = useState([]);
  const [burnScore, setBurnScore] = useState(0);
  const [burnGrade, setBurnGrade] = useState('');
  const [traumaScore, setTraumaScore] = useState(0);
  const [traumaGrade, setTraumaGrade] = useState('');
  const [compassionScore, setCompassionScore] = useState(0);
  const [compassionGrade, setCompassionGrade] = useState('');
  const [checkError, setCheckError] = useState(false);

  useEffect(() => {
    saveQuestionValue();
  }, [quesVal]);

  function saveQuestionValue() {
    saveQue[quesVal[0] - 1] = quesVal[2];
  }

  function totalCategories() {
    let scrB = 0;
    let scrC = 0;
    let scrT = 0;

    text.map((question, index) => {
      switch(question.question_type) {
        case 'b':
          scrB += saveQue[index];
          break;
        case 'c':
          scrC += saveQue[index];
          break;
        case 't':
          scrT += saveQue[index];
          break;
      }
      
    })

    if (saveQue.includes(null)) {
      setCheckError(true);
    } else {
      setBurnScore(scrB);
      setBurnGrade(getGrade(scrB));

      setCompassionScore(scrC);
      setCompassionGrade(getGrade(scrC));

      setTraumaScore(scrT);
      setTraumaGrade(getGrade(scrT));
      setCheckError(false);
    }
  }

  function getGrade(yourScore) {
    let grade = '';

    switch (true) {
        case yourScore <= 22:
          grade = 'Low';
          break;
        case yourScore <= 42:
          grade = 'Moderate';
          break;
        case yourScore >= 42:
          grade = 'High';
          break;
    }
    return grade;
  }

  const text = [
    {'question_nbr' : 1, 'question' : '* I am happy.','question_type' : 'b'},
    {'question_nbr' : 2, 'question' : 'I am preoccupied with more than one person I [help].','question_type' : 't'},
    {'question_nbr' : 3, 'question' : 'I get satisfaction from being able to [help] people.','question_type' : 'c'},
    {'question_nbr' : 4, 'question' : '* I feel connected to others.','question_type' : 'b'},
    {'question_nbr' : 5, 'question' : 'I jump or am startled by unexpected sounds.','question_type' : 't'},
    {'question_nbr' : 6, 'question' : 'I feel invigorated after working with those I [help].','question_type' : 'c'},
    {'question_nbr' : 7, 'question' : 'I find it difficult to separate my personal life from my life as a [helper].','question_type' : 't'},
    {'question_nbr' : 8, 'question' : 'I am not as productive at work because I am losing sleep over traumatic experiences of a person I [help].','question_type' : 'b'},
    {'question_nbr' : 9,'question' : 'I think that I might have been affected by the traumatic stress of those I [help].','question_type' : 't'},
    {'question_nbr' : 10, 'question' : 'I feel trapped by my job as a [helper].','question_type' : 'b'},
    {'question_nbr' : 11, 'question' : 'Because of my [helping], I have felt "on edge" about various things.','question_type' : 't'},
    {'question_nbr' : 12, 'question' : 'I like my work as a [helper].','question_type' : 'c'},
    {'question_nbr' : 13, 'question' : 'I feel depressed because of the traumatic experiences of the people I [help].','question_type' : 't'},
    {'question_nbr' : 14, 'question' : 'I feel trapped by my job as a [helper].','question_type' : 't'},
    {'question_nbr' : 15, 'question' : '* I feel as though I am experiencing the trauma of someone I have [helped].','question_type' : 'b'},
    {'question_nbr' : 16, 'question' : 'I have beliefs that sustain me.','question_type' : 'c'},
    {'question_nbr' : 17, 'question' : '* I am pleased with how I am able to keep up with [helping] techniques and protocols.','question_type' : 'b'},
    {'question_nbr' : 18, 'question' : 'I am the person I always wanted to be.','question_type' : 'c'},
    {'question_nbr' : 19, 'question' : 'My work makes me feel satisfied.','question_type' : 'b'},
    {'question_nbr' : 20, 'question' : 'I feel worn out because of my work as a [helper].','question_type' : 'c'},
    {'question_nbr' : 21, 'question' : 'I have happy thoughts and feelings about those I [help] and how I could help them.','question_type' : 'b'},
    {'question_nbr' : 22, 'question' : 'I feel overwhelmed because my case [work] load seems endless.','question_type' : 'c'},
    {'question_nbr' : 23, 'question' : 'I believe I can make a difference through my work.','question_type' : 't'},
    {'question_nbr' : 24, 'question' : 'I avoid certain activities or situations because they remind me of frightening experiences of the people I [help].','question_type' : 'c'},
    {'question_nbr' : 25, 'question' : 'I am proud of what I can do to [help].','question_type' : 't'},
    {'question_nbr' : 26, 'question' : 'As a result of my [helping], I have intrusive, frightening thoughts.','question_type' : 'b'},
    {'question_nbr' : 27, 'question' : 'I feel "bogged down" by the system.','question_type' : 'c'},
    {'question_nbr' : 28, 'question' : 'I have thoughts that I am a "success" as a [helper].','question_type' : 't'},
    {'question_nbr' : 29, 'question' : "* I can't recall important parts of my work with trauma victims.",'question_type' : 'b'},
    {'question_nbr' : 30, 'question' : 'I am a very caring person.','question_type' : 'c'},
  ];

  return (
    <div className={classes.root}>
      <Grid className={classes.sect} container spacing={3}>
        <Grid item xs />
        <Grid item xs={10}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {text.map((txt, index) => (
                <Questions 
                  QuestionValue={quesVal} 
                  onQuestionValueChange = {setQuesVal}
                  quesNbr = {txt.question_nbr}
                  quesType = {txt.question_type} 
                  actQues = {txt.question}  
                  queId = {'queId' + index.toString()} 
                  queVal = {txt.question.includes("*") ? 'burn' : 'norm'}
                  chkError = {checkError}
                />
              ))
              }
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={totalCategories}>
              Submit
            </Button>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
      <Grid className={classes.tableScore} container spacing={3}>
        <Grid item xs />
        <Grid item xs={12} sm={6}>
          <TableScore 
            burnScore={burnScore} burnGrade={burnGrade} 
            traumaScore={traumaScore} traumaGrade ={traumaGrade} 
            compassionScore={compassionScore} compassionGrade={compassionGrade}
          />
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