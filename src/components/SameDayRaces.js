/* global google */

import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import EventNoteIcon from '@material-ui/icons/EventNote';

import smallLoaderGif from './../images/small-loader.gif';
import { getSession, setSession } from './../service/storageService';

const margins = {
    marginRight: '10px',
    marginLeft: '5px',
    marginTop: '5px',
    marginBottom: '5px',
  };
  
const boxShadow = '0px 0px 9px #50AE55';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...margins,
  },
  overallCard: {
    ...margins,
    '&:hover': {
      boxShadow,
    },
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    overflowX: 'auto',
  },
  table: {
    marginLeft: theme.spacing.unit * 2,
    minWidth: 500,
  },
  directionsCell: {
    position: 'relative',
    top: '-15px',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

// const getOrigin = () => {
//   const originCacheKey = 'origin';
//   let cachedOrigin = getSession(originCacheKey);
//   let origin;

//   if (!cachedOrigin && navigator.geolocation) {
//     const geoSuccess = function(position) {
//       origin = { lat: position.coords.latitude, lng: position.coords.longitude };
//       setSession({ key: originCacheKey, value: JSON.stringify(origin)});
//     };
//     navigator.geolocation.getCurrentPosition(geoSuccess);
//   } else {
//     origin = JSON.parse(cachedOrigin);
//   }
  
//   return origin;
// }

const createMarkup = (html) => { return {__html: html}; };

const buildMapsUrl = (origin, venue) => {
  const postcodeRegex = /(\b[A-Z]{1,2}\d{1,2}( ?\d?[A-Z]{2})?)(?=,|$)/;
  const matches = venue.match(postcodeRegex);
  const googleUrl = `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${
                      matches && matches.length > 0 ? matches[0].replace(/ /g, '+') : venue.replace(/ /g, '+')}/@${origin.lat},${origin.lng},10z`;

  return googleUrl;
};

const DrivingDistance = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}`,
    loadingElement: <div style={{ height: `0%` }} />,
    containerElement: <div style={{ height: `0px` }} />,
    mapElement: <div style={{ height: `0%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: this.props.origin,
        destination: this.props.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          //console.log(`error fetching directions ${result}`);
          this.setState({
            directions: null,
          });
        }
      });
    }
  })
)((props) => {
    const duration = props.directions ? props.directions.routes[0].legs[0].duration.text : '';
    const googleUrl = buildMapsUrl(props.origin, props.venue);
    const anchorTag = `<a href=${googleUrl} target='_blank'>${duration}</a>`;

    if (!props.directions) {
      return <div></div>;
    }
    
    return props.directions.routes[0] && props.directions.routes[0].legs[0] ? 
      <div className={props.classes.directionsCell}><DirectionsCar size={'small'} /><span dangerouslySetInnerHTML={createMarkup(anchorTag)} /></div> : 
          <img src={smallLoaderGif} alt={'loading gif'} />;
  }
);

function SameDayRaces(props) {
  const { classes, origin, races } = props;
  let sameDayRaces = [];

  for (let i = 0; i < races.length; i++) {
    const raceUrl = `https://www.fellrunner.org.uk/races.php?id=${races[i].id}`;
    const googleUrl = buildMapsUrl(origin, races[i].venue);
    const anchorTag = `<a href=${googleUrl} target='_blank'>Get Directions</a>`;

    const directionsComponent = origin && races[i].location && races[i].location.lat > 0 ? 
      <DrivingDistance origin={origin} destination={races[i].location} venue={races[i].venue} classes={classes} /> : 
      <div><DirectionsCar size={'small'} /><span dangerouslySetInnerHTML={createMarkup(anchorTag)} /></div>; 

    sameDayRaces.push(<TableRow key={races[i].id}>
        <TableCell align="right"><EventNoteIcon /><a href={raceUrl} target="_blank">{races[i].name}</a></TableCell>
        <TableCell align="right">{races[i].time}</TableCell>
        <TableCell align="right">{races[i].raceType}</TableCell>
        <TableCell align="right">{directionsComponent}</TableCell>
    </TableRow>);
  }

  return (
    <Grid className={classes.root} container>
        <Grid item xs>
            <Typography variant="subheading">
                <b>Races on same day</b>
            </Typography>
            <Card key={'samedayraces'} className={classes.overallCard}>
                <CardContent>
                    <Paper className={classes.tableRoot}>
                        <Table className={classes.table} padding={'none'}>
                            <TableHead>
                                <TableRow key={'samedayracesheadings'}>
                                    <TableCell align="right"><b>Race</b></TableCell>
                                    <TableCell align="right"><b>Time</b></TableCell>
                                    <TableCell align="right"><b>Category</b></TableCell>
                                    <TableCell align="right"><b>Driving Time</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sameDayRaces}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
}

export default withStyles(styles)(React.memo(SameDayRaces));
