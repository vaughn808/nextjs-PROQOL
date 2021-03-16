import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import TrainingCard from '../components/CardTraining';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  format: {
    paddingTop: theme.spacing(2),
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

export default function Home() {
  const classes = useStyles();

  const cardText = [
    {'title' : 'STAR Training',
     'desc' : 'Strategies for Trauma Awareness and Resilience, aka STAR, is 5 day evidence-based trauma awareness and resilience training with a 16 year national and international reputation of success. STAR was developed in the months following the tragic events of September 11, 2001 to transform trauma survivors into resilient thrivers. From its inception, it has encompassed a multicultural perspective that has been well-received globally and locally.',
     'btnLink' : 'http://www.mnpeace.org/star-training.html',
    },
    {
      'title' : 'STAR-Lite Training',
      'desc' : '​Not enough time for the full STAR Training? No worries.  The STAR-Lite Training is a single-day evidence-based training integrating neuropsychology, trauma healing and resilience, restorative justice, nonviolent conflict transformation, and broadly defined spirituality for those who wish to learn the basics of becoming trauma-informed, resilience-oriented, and restorative justice-focused within a shorter-time frame than the full STAR Training.',
      'btnLink' : 'http://www.mnpeace.org/star-lite-training.html',
    },
    {
      'title' : 'Restorative Justice 101',
      'desc' : '​RJ 101: Training for Practice in Everyday Life teaches the principles, philosophies, and practices of Restorative Justice via lecture and experiential education methodologies for empowering individuals and communities for application in daily life. Restorative practices empower those who have been harmed, the community surrounding the harmed, and positively impacts the behavior of those who cause harm.',
      'btnLink' : 'http://www.mnpeace.org/intro-to-restorative-justice.html',
    }
    ,
    {
      'title' : 'Custom Trainings',
      'desc' : "Peacebuilding’s expert training facilitators are available to design specialized trainings to meet your organization's staff development needs. We also provide individualized consultation about how to integrate trauma-informed and resilience-oriented strategies into your organization's structure.",
      'btnLink' : 'http://www.mnpeace.org/custom-training.html',
    },
    {
      'title' : 'Resilience',
      'desc' : 'When terrible things happen and our peace is stolen from us, most people want to build peace into their lives. Join us to learn, explore, and apply simple, free strategies to build peace into our personal and community lives with self-care practices for resilience.',
      'btnLink' : 'http://www.mnpeace.org/resilience-training.html',
    }

  
  ];

  return (
    <div className={classes.root}>
      <Grid className={classes.format} container spacing={3}>
        <Grid item xs />
        <Grid item xs={10} sm={6}>
          <Typography 
              color = 'textPrimary'
              variant="h4"
          >
            What is Peacebuilding?
          </Typography>
          <Divider />
          <Typography className={classes.format} paragraph>
            First of all, why do we need Peacebuilding? Well, let's think about it: What do Ferguson, Monrovia, Newtown, Deraa, Parkland, Mogadishu, Minneapolis, and Saint Paul all have in common? 
          </Typography>
          <Typography paragraph>
            All of these communities are filled with individuals who have experienced intense psychological trauma and cry out for healing individually and collectively. They know what it means to be psychologically traumatized and overwhelmed with experiences that leave them feeling powerless, helpless, and lacking a sense of security. When individuals and communities are psychologically traumatized, they are easily controlled by others who may not have their best interests in mind. So, what can be done about this? 
          </Typography>
          <Typography paragraph>
            Peacebuilding is strategic interventions designed to prevent the start or resumption of interpersonal and inter-community conflict and violence by deliberately creating sustainable peace at the local level. In response to both human-made and natural disasters, individuals and communities can actively engage in peacebuilding. A peacebuilder is anyone who employs simple, effective strategies to nonviolently interrupt the transmission of psychological trauma and woundedness within their spheres of influence. Peacebuilding can happen at the individual, family, neighborhood, community, national, and international levels. Peacebuilders learn how to act strategically, rather than simply react when peace is stolen from them.
          </Typography>
          <Typography paragraph>
            At the Minnesota Peacebuilding Leadership Institute (aka Peacebuilding) we learn what happens in our bodies, brains, spirits, and communities when life’s circumstances, dramatically or slowly, steal peace away from us. We learn that when peace is stolen, it’s hard to reclaim it because we confuse the human need for justice with the desire for revenge. Revenge is a "wild justice.” It’s the simplistic, easy reaction. It’s the desire to make bad things happen to someone who has stolen peace from us. It’s the drive to make "the other" pay, to steal peace away from them, often to a greater degree than the loss we have suffered.  
          </Typography>
          <Typography paragraph>
            So, why is revenge so is sweet? Because the drive for revenge gets confused with the basic human need for justice. When someone does something bad to us or to someone we love, the desire for revenge triggers and lights up the same pleasure region in our brain as when we consume chocolate or some other tasty treat. When we react to the instant pleasure of revenge, we choose a simplistic brain neuropathway that is sweet in the short run, but short-lived in the long run. Revenge does not satisfy our deep cravings for authentic peace. It never heals our psychological trauma. In the long run, revenge only makes it worse. So despite how sweet the chocolate is, despite how sweet the revenge feels in the moment, it only lasts a brief time. And revenge always derails us from achieving peace.  Revenge never truly leads us to the peace we crave. 
          </Typography>
          <Typography paragraph>
            At Peacebuilding, we truly satisfy our cravings for peace and our basic human need for justice by transforming psychological trauma into nonviolent power by learning positive, productive alternatives to revenge and other practical strategies that lead to healing and set the stage for authentic reconciliation.  
          </Typography>
          <Typography paragraph>
            At Peacebuilding, we learn and practice truth-telling so peace does not elude us in the long run. We explore how to navigate difficulties with mercy and active compassion, to be tender-hearted as well as tough-minded. 
          </Typography>
          <Typography paragraph>
            At Peacebuilding, we discover how to restore the deep human need for justice because neuroscience shows us that restorative justice makes positive changes in our brains. 
          </Typography>
          <Typography paragraph>
            At Peacebuilding, we learn how truth, mercy, justice, and peace, together, as the points on a compass, build confidence and skills for peacebuilding leadership locally and globally. 
          </Typography>
          <Typography paragraph>
            The Minnesota Peacebuilding Leadership Institute is a  non-partisan public charity under the IRS’s 501c3 classification. We fully engage individuals, organizations, and communities to become positive agents of nonviolent social change within their spheres of influence. Our mission is to instigate, train, and support racially, sexually, culturally, ethnically, religiously, and economically diverse individuals and organizations to become trauma-informed, resilience-oriented, and restorative justice-focused empowering communities in Minnesota, the USA, and around the world.
          </Typography>        
          <Typography paragraph>
            Come peacebuilding with us!
          </Typography>
          <Grid className={classes.format} container spacing={3} justify="space-evenly">
            <Grid item xs={12} sm={2}>
              <TrainingCard title={cardText[0].title} desc={cardText[0].desc} btnLink={cardText[0].btnLink}/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TrainingCard title={cardText[1].title} desc={cardText[1].desc} btnLink={cardText[1].btnLink}/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TrainingCard title={cardText[2].title} desc={cardText[2].desc} btnLink={cardText[2].btnLink}/>
            </Grid>
          </Grid>
          <Grid className={classes.format} container spacing={3} justify="space-evenly">
            <Grid item xs={12} sm={2}>
              <TrainingCard title={cardText[4].title} desc={cardText[4].desc} btnLink={cardText[4].btnLink}/>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TrainingCard title={cardText[3].title} desc={cardText[3].desc} btnLink={cardText[3].btnLink}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  )
}
