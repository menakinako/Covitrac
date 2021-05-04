import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css';
import cx from 'classnames'
import Countup from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) =>{
    if(!confirmed){
        return 'loading.....';
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify= "center">
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Infected</Typography>
                      <Typography variant="h5">
                          <Countup  start={0} end={confirmed.value}  duration={2.5}   separator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="h5">No of active cases of COVID-19</Typography>
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                      <Typography variant="h5">
                          <Countup  start={0} end={recovered.value}  duration={2.5}   separator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="h5">No of recoveries from COVID-19</Typography>
                  </CardContent>
                </Grid>
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom>Deceased</Typography>
                      <Typography variant="h5">
                          <Countup  start={0} end={deaths.value}  duration={2.5}   separator=","/>
                      </Typography>
                      <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="h5">No of deceased in COVID-19</Typography>
                  </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;