import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import LayoutProqol from '../components/proqol/LayoutProqol'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(3),
    },
    paper: {
      padding : theme.spacing(4),
      color: theme.palette.text.secondary,
    },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>Peacebuilding - Proqol</title>
                <meta name='keywords' content='peacebuilding, proqol, professional quality of life scale, test, happiness, 
                compassion satisfaction and compassion fatigue, Compassion Satisfaction, Burnout, Secondary Traumatic Stress'/>
            </Head>
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item sm />
                <Grid item xs={12} sm={10}>
                  <Typography 
                      color = 'textPrimary'
                      variant="h6"
                  >
                      COMPASSION SATISFACTION AND COMPASSION FATIGUE (PROQOL) VERSION 5 (2009)
                  </Typography>       
                  <Typography 
                      color = 'textPrimary'
                      variant="h6"
                  >
                      Description
                  </Typography>    
                  <Typography 
                      color = 'textPrimary'
                      paragraph
                      >
                          When you [help] people you have direct contact with their lives. As you may have found, your compassion for those you [help] 
                          can affect you in positive and negative ways. Below are some questions about your experiences, both positive and negative, 
                          as a [helper]. Consider each of the following questions about you and your current work situation. Select the number that 
                          honestly reflects how frequently you experienced these things in the last 30 days.
                  </Typography>
                </Grid>
                <Grid item sm />
              </Grid>
            </Paper>
            <LayoutProqol />            
        </div>
    )
}


