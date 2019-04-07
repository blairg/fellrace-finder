import React from 'react';
import * as moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { LazyImage } from 'react-lazy-images';

import lowResMap from './../images/maplowres.jpg';

const margins = {
  marginRight: '10px',
  marginLeft: '5px',
  marginTop: '5px',
  marginBottom: '5px',
};

const cardStyles = {
  ...margins,
  height: '140px',
  ['@media (min-width:400px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '250px',
  },
  ['@media (min-width:750px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '150px',
  },
  ['@media (max-width:375px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '300px',
  },
  ['@media (max-width:350px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '270px',
  },
  ['@media (max-width:320px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '290px',
  },
};

const raceInfoCardStyles = {
  ...margins,
  height: '110px',
  ['@media (min-width:400px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '150px',
  },
  ['@media (min-width:750px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '130px',
  },
  ['@media (max-width:375px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '150px',
  },
  ['@media (max-width:350px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '220px',
  },
  ['@media (max-width:320px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '145px',
  },
};

const mapCardStyles = {
  ...margins,
  ['@media (min-width:400px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '240px',
  },
  ['@media (min-width:750px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '370px',
  },
  ['@media (min-width:1000px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '570px',
  },
  ['@media (min-width:1024px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '600px',
  },
  ['@media (min-width:1400px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '750px',
  },
  ['@media (max-width:375px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '230px',
  },
  ['@media (max-width:350px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '200px',
  },
  ['@media (max-width:320px)']: {
    // eslint-disable-line no-useless-computed-key
    height: '200px',
  },
};

const boxShadow = '0px 0px 9px #50AE55';

const styles = {
  root: {
    flexGrow: 1,
    ...margins,
  },
  cardBody: {
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  mapCardBody: {
    paddingTop: '10px',
    paddingBottom: '20px',
    ['@media (min-width:400px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '350px',
    },
    ['@media (min-width:750px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '600px',
    },
    ['@media (min-width:1000px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '950px',
    },
    ['@media (min-width:1024px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '95%',
    },
    ['@media (max-width:375px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '300px',
    },
    ['@media (max-width:350px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '200px',
    },
    ['@media (max-width:320px)']: {
      // eslint-disable-line no-useless-computed-key
      width: '265px',
    },
  },
  raceInfoCard: {
    ...raceInfoCardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  overallCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  mapCard: {
    ...mapCardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  categoryCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  clubCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  timeCard: {
    ...cardStyles,
    '&:hover': {
      boxShadow,
    },
  },
  cardTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
  },
};

const recordStoodFor = recordYear => {
  return new Date().getFullYear() - parseInt(recordYear, 10);
};

const buildRecords = (raceInfo, classes) => {
  let records;

  if (raceInfo._recordMaleName) {
    records = (
      <Grid item xs>
        <Card className={classes.overallCard}>
          <CardContent>
            <Typography variant="body2" className={classes.cardTitle}>
              Records
            </Typography>
            <div className={classes.cardBody}>
              <Typography variant="subheading">
                <b>Male:</b> {raceInfo._recordMaleName} -{' '}
                {raceInfo._recordMaleTime} - {raceInfo._recordMaleYear} (for{' '}
                {recordStoodFor(raceInfo._recordMaleYear)} years)
              </Typography>
              <Typography variant="subheading">
                <b>Female:</b> {raceInfo._recordFemaleName} -{' '}
                {raceInfo._recordFemaleTime} - {raceInfo._recordFemaleYear} (for{' '}
                {recordStoodFor(raceInfo._recordFemaleYear)} years)
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return records;
};

const buildMap = (raceInfo, classes) => {
  let map;

  if (raceInfo._latitude > 0) {
    const altText = `Static Google Map terrain view of ${raceInfo._venue}`;
    map = (
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.mapCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Map
              </Typography>
              <div>
                <LazyImage
                  src={raceInfo._mapUrl}
                  className={classes.mapCardBody}
                  alt={altText}
                  placeholder={({ imageProps, ref }) => (
                    <img className={classes.mapCardBody} ref={ref} src={lowResMap} alt={imageProps.alt} />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }

  return map;
};

const buildGeoLocation = raceInfo => {
  let geoLocation;

  if (raceInfo._latitude > 0) {
    geoLocation = (
      <Typography variant="subheading">
        <b>Latitude:</b> {raceInfo._latitude} <b>Longitude:</b>{' '}
        {raceInfo._longitude}
      </Typography>
    );
  }

  return geoLocation;
};

function RaceInfo(props) {
  const { classes, raceInfo } = props;
  const key = `${raceInfo._date}${raceInfo._time}`;
  const map = buildMap(raceInfo, classes);
  const geoLocation = buildGeoLocation(raceInfo);

  return (
    <div key={key} className={classes.root}>
      {map}
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.raceInfoCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Race Information
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">
                  {moment(raceInfo._date, 'DD-MM-YYYY')
                    .format('dddd Do MMMM YYYY')
                    .toString()}{' '}
                  - {raceInfo._time}
                </Typography>
                <Typography variant="subheading">
                  {raceInfo._type}
                </Typography>
                <Typography variant="subheading">
                  {raceInfo._distanceKilometers}
                  km / {raceInfo._climbMeters}m
                </Typography>
                <Typography variant="subheading">
                  {raceInfo._distanceMiles}
                  miles / {raceInfo._climbFeet}
                  feet
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid className={classes.root} container>
        <Grid item xs>
          <Card className={classes.overallCard}>
            <CardContent>
              <Typography variant="body2" className={classes.cardTitle}>
                Venue
              </Typography>
              <div className={classes.cardBody}>
                <Typography variant="subheading">{raceInfo._venue}</Typography>
                {geoLocation}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {buildRecords(raceInfo, classes)}
      </Grid>
    </div>
  );
}

export default withStyles(styles)(React.memo(RaceInfo));
