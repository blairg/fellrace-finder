import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const cardStyles = {
  marginRight: '10px',
  marginLeft: '5px',
  marginTop: '5px',
  marginBottom: '5px',
  height: '150px',
  ['@media (min-width:400px)']: { // eslint-disable-line no-useless-computed-key
    height: '230px'
  },
  ['@media (min-width:750px)']: { // eslint-disable-line no-useless-computed-key
    height: '150px'
  },
  ['@media (max-width:375px)']: { // eslint-disable-line no-useless-computed-key
    height: '240px'
  },
  ['@media (max-width:350px)']: { // eslint-disable-line no-useless-computed-key
    height: '310px'
  },
  ['@media (max-width:320px)']: { // eslint-disable-line no-useless-computed-key
    height: '320px'
  },
};

const styles = {
  root: {
    flexGrow: 1,
    marginRight: '10px',
    marginLeft: '5px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  cardBody: {
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  overallCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  categoryCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  clubCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  timeCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow: '0px 0px 9px #50AE55',
    },
  },
  cardTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
};

const recordStoodFor = (recordYear) => {
    return new Date().getFullYear() - parseInt(recordYear, 10);
};

const buildRecords = (raceInfo, classes) => {
    let records;

    if (raceInfo._recordMaleName) {
        records = <Grid item xs>
        <Card className={classes.overallCard}>
          <CardContent>
            <Typography variant="body2" className={classes.cardTitle}>
              Records
            </Typography>
            <div className={classes.cardBody}>
              <Typography variant="subheading"><b>Male:</b> {raceInfo._recordMaleName} - {raceInfo._recordMaleTime} - {raceInfo._recordMaleYear} (for {recordStoodFor(raceInfo._recordMaleYear)} years)</Typography>
              <Typography variant="subheading"><b>Female:</b> {raceInfo._recordFemaleName} - {raceInfo._recordFemaleTime} - {raceInfo._recordFemaleYear} (for {recordStoodFor(raceInfo._recordFemaleYear)} years)</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    }

    return records;
}

function RaceInfo(props) {
  const { classes, raceInfo } = props;
  const key = `${raceInfo._date}${raceInfo._time}`;

  return (
    <div key={key} className={classes.root}>
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.overallCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Race Information
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">{raceInfo._date} - {raceInfo._time}</Typography>
                <Typography variant="subheading">{raceInfo._distanceKilometers}km / {raceInfo._climbMeters}m</Typography>
                <Typography variant="subheading">{raceInfo._distanceMiles}miles / {raceInfo._climbFeet}feet</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        {buildRecords(raceInfo, classes)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RaceInfo);
