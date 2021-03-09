import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    padTop: {
        paddingTop: theme.spacing(2),
    },
    padTopBot: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    bold: {
        paddingTop: theme.spacing(2),
        fontWeight: 600,
      },
  }));

const CatDescriptions = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant='h6' className={classes.padTop}>Compassion Satisfaction</Typography>
            <Divider />
            <Typography className={classes.padTop}>
                Compassion satisfaction is about the pleasure you derive from being able to do your work well. 
                For example, you may feel like it is a pleasure to help others through your work. You may feel positively 
                about your colleagues or your ability to contribute to the work setting or even the greater good of society. 
                Higher scores on this scale represent a greater satisfaction related to your ability to be an effective caregiver in your job.
            </Typography>
            <Typography className={classes.padTop}>
                If you are in the higher range, you probably derive a good deal of professional satisfaction from your position. 
                If your scores are below 23, you may either find problems with your job, or there may be some other reason—for example, 
                you might derive your satisfaction from activities other than your job. (Alpha scale reliability 0.88)
            </Typography>
            <Typography variant='h6' className={classes.padTop}>Burnout</Typography>
            <Divider />
            <Typography className={classes.padTop}>
                Most people have an intuitive idea of what burnout is. From the research perspective, burnout is one of the elements of 
                Compassion Fatigue (CF). It is associated with feelings of hopelessness and difficulties in dealing with work or in doing 
                your job effectively. These negative feelings usually have a gradual onset. They can reflect the feeling that your efforts 
                make no difference, or they can be associated with a very high workload or a non-supportive work environment. Higher scores 
                on this scale mean that you are at higher risk for burnout.
            </Typography>
            <Typography className={classes.padTop}>
                If your score is below 23, this probably reflects positive feelings about your ability to be effective in your work. If you score 
                above 41, you may wish to think about what at work makes you feel like you are not effective in your position. Your score may reflect 
                your mood; perhaps you were having a “bad day” or are in need of some time off. If the high score persists or if it is reflective of 
                other worries, it may be a cause for concern. (Alpha scale reliability 0.75)
            </Typography>
            <Typography color = 'textSecondary' className={classes.padTop}>
                On the burnout scale you will need to take an extra step. Starred items are “reverse scored.” If you scored the item 1, give it a value of 
                5. The reason we ask you to reverse the scores is because scientifically the measure works better when these questions are asked in a 
                positive way though they can tell us more about their negative form. For example, the question “I am happy” tells us more about the 
                effects of helping when you are not happy so you reverse the score
            </Typography>
            <Typography variant='h6' className={classes.padTop}>Secondary Traumatic Stress</Typography>
            <Divider />
            <Typography className={classes.padTop}>
                The second component of Compassion Fatigue (CF) is secondary traumatic stress (STS). It is about your work related, secondary exposure 
                to extremely or traumatically stressful events. Developing problems due to exposure to other’s trauma is somewhat rare but does happen 
                to many people who care for those who have experienced extremely or traumatically stressful events. For example, you may repeatedly hear 
                stories about the traumatic things that happen to other people, commonly called Vicarious Traumatization. If your work puts you directly 
                in the path of danger, for example, field work in a war or area of civil violence, this is not secondary exposure; your exposure is primary. 
                However, if you are exposed to others’ traumatic events as a result of your work, for example, as a therapist or an emergency worker, this 
                is secondary exposure. The symptoms of STS are usually rapid in onset and associated with a particular event. They may include being afraid, 
                having difficulty sleeping, having images of the upsetting event pop into your mind, or avoiding things that remind you of the event.
            </Typography>
            <Typography className={classes.padTop}>
                If your score is above 41, you may want to take some time to think about what at work may be frightening to you or if there is some other reason 
                for the elevated score. While higher scores do not mean that you do have a problem, they are an indication that you may want to examine how you 
                feel about your work and your work environment. You may wish to discuss this with your supervisor, a colleague, or a health care professional. 
                (Alpha scale reliability 0.81)
            </Typography>
            <Typography className={classes.bold}>Based on your responses, if you have any concerns, you should discuss them with a physical or mental health care professional.</Typography>
            <Typography color = 'textSecondary' className={classes.padTopBot}>
                © B. Hudnall Stamm, 2009-2012. Professional Quality of Life: Compassion Satisfaction and Fatigue Version 5 (ProQOL). www.proqol.org. This test may 
                be freely copied as long as (a) author is credited, (b) no changes are made, and (c) it is not sold. Those interested in using the test should visit 
                www.proqol.org to verify that the copy they are using is the most current version of the test.
            </Typography>
        </div>
    )
}

export default CatDescriptions
