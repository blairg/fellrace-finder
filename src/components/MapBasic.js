/* global google */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  InfoWindow
} from "react-google-maps";

const styles = theme => ({
  root: {
    width: "98%",
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    height: "700px"
  },
  expansionPanel: {
    marginTop: "5px",
    marginBottom: "15px"
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  tableRoot: {
    width: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    minWidth: 500
  },
  short: {
    backgroundColor: "#946F00",
    color: "white",
    marginRight: "2px"
  },
  medium: {
    backgroundColor: "#FFD799",
    color: "black",
    marginRight: "2px"
  },
  long: {
    backgroundColor: "#70A5FE",
    color: "white",
    marginRight: "2px"
  }
});

// const getDirections = directions => {
//   if (directions) {
//     return directions.routes[0].legs[0].steps.map(step => {
//       return {
//         __html: `For ${step.distance.text} (approx ${step.duration.text}), ${
//           step.instructions
//         }<br />`
//       };
//     });
//   } else {
//     return [];
//   }
// };

// const getDistance = directions => {
//   if (directions) {
//     const km = directions.routes[0].legs[0].distance.text;
//     const milesRounded = (
//       Math.round(parseInt(km) * 0.6213712 * 10) / 10
//     ).toFixed(1);
//     return `${milesRounded} miles (${km})`;
//   } else {
//     return "";
//   }
// };

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    // componentDidMount() {
    //   const DirectionsService = new google.maps.DirectionsService();
    //   DirectionsService.route(
    //     {
    //       origin: { lat: 53.6310972, lng: -1.7940032 },
    //       destination: { lat: this.props.races[0].geolocation.latitude,
    //                      lng: this.props.races[0].geolocation.longitude },
    //       travelMode: google.maps.TravelMode.DRIVING
    //     },
    //     (result, status) => {
    //       if (status === google.maps.DirectionsStatus.OK) {
    //         this.setState({
    //           directions: result
    //         });
    //       } else {
    //         //console.log(`error fetching directions ${result}`);
    //         this.setState({
    //           directions: null
    //         });
    //       }
    //     }
    //   );
    // }
  })
)(props => {
  // if (!props.directions) {
  //   return null;
  // }
  let markers = [];
  let rows = [];

  if (props.races) {
    for (let i = 0; i < props.races.length; i++) {
      markers.push(
        <Marker
          key={props.races[i].name}
          position={{
            lat: props.races[i].geolocation.latitude,
            lng: props.races[i].geolocation.longitude
          }}
          title={props.races[i].name + " - " + props.races[i].date}
        ></Marker>
      );

      rows.push(
        <TableRow key={props.races[i].name}>
          <TableCell align="right">
            <a
              href={
                "https://fellrunner.org.uk/races.php?id=" + props.races[i].id
              }
            >
              {props.races[i].name}
            </a>
          </TableCell>
          <TableCell align="right">{props.races[i].date}</TableCell>
          <TableCell align="right">{props.races[i].time}</TableCell>
        </TableRow>
      );
    }
  }

  return (
    <>
      <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: 53.6310972, lng: -1.7940032 }}
      >
        {markers}
      </GoogleMap>
      <br />
      <br />
      <Paper className={props.classes.tableRoot}>
        <Table className={props.classes.table}>
          <TableBody>
            <TableRow>
              <TableCell align="right">
                <b>Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Date</b>
              </TableCell>
              <TableCell align="right">
                <b>Time</b>
              </TableCell>
            </TableRow>
            {rows}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
});

function MapBasic(props) {
  const { origin, classes, races } = props;

  // if (!origin) {
  //   return <></>;
  // }

  // if (!origin && destination) {
  //   return <CircularProgress />;
  // }

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Avatar className={classes.short} alt="Short Races">
          S
        </Avatar>
        <Avatar className={classes.medium} alt="Medium Races">
          M
        </Avatar>
        <Avatar className={classes.long} alt="Long Races">
          L
        </Avatar>
      </Grid>
      <br />
      <MyMapComponent
        classes={classes}
        isMarkerShown={true}
        races={races}
        // origin={origin}
        // destination={destination}
      />
    </>
  );
}

export default withStyles(styles)(React.memo(MapBasic));
