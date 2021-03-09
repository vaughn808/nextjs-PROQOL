import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import LayoutProqol from '../components/proqol/LayoutProqol'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing(6),
    },
    paper: {
      padding : theme.spacing(4),
      color: theme.palette.text.secondary,
    },
  }));

const proqol = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Head>
                <title>Peacebuilding - Proqol</title>
                <meta name='keywords' content='peacebuilding, proqol, professional quality of life scale, test, happiness, 
                compassion satisfaction and compassion fatigue, Compassion Satisfaction, Burnout, Secondary Traumatic Stress'/>
            </Head>
            <Paper className={classes.paper}>
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
                >
                    When you [help] people you have direct contact with their lives. As you may have found, your compassion for those you [help] 
                    can affect you in positive and negative ways. Below are some questions about your experiences, both positive and negative, 
                    as a [helper]. Consider each of the following questions about you and your current work situation. Select the number that 
                    honestly reflects how frequently you experienced these things in the last 30 days.
                </Typography>
            </Paper>
            <LayoutProqol />            
        </div>
    )
}

export default proqol
