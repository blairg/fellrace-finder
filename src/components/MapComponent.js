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
import CircularProgress from "@material-ui/core/CircularProgress";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
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
  }
});

const getDirections = directions => {
  if (directions) {
    return directions.routes[0].legs[0].steps.map(step => {
      return {
        __html: `For ${step.distance.text} (approx ${step.duration.text}), ${
          step.instructions
        }<br />`
      };
    });
  } else {
    return [];
  }
};

const getDistance = directions => {
  if (directions) {
    const km = directions.routes[0].legs[0].distance.text;
    const milesRounded = (
      Math.round(parseInt(km) * 0.6213712 * 10) / 10
    ).toFixed(1);
    return `${milesRounded} miles (${km})`;
  } else {
    return "";
  }
};

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
      process.env.REACT_APP_MAPS_KEY
    }`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: this.props.origin,
          destination: this.props.destination,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            //console.log(`error fetching directions ${result}`);
            this.setState({
              directions: null
            });
          }
        }
      );
    }
  })
)(props => {
  if (!props.directions) {
    return null;
  }

  return (
    <>
      <GoogleMap defaultZoom={8} defaultCenter={props.origin}>
        <Paper className={props.classes.tableRoot}>
          <Table className={props.classes.table}>
            <TableBody>
              <TableRow>
                <TableCell align="right">
                  <b>Distance</b>
                </TableCell>
                <TableCell align="left">
                  {getDistance(props.directions)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  <b>Duration</b>
                </TableCell>
                <TableCell align="left">
                  {props.directions
                    ? props.directions.routes[0].legs[0].duration.text
                    : ""}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  <b>Start Address</b>
                </TableCell>
                <TableCell align="left">
                  {props.directions
                    ? props.directions.routes[0].legs[0].start_address
                    : ""}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">
                  <b>End Address</b>
                </TableCell>
                <TableCell align="left">
                  {props.directions
                    ? props.directions.routes[0].legs[0].end_address
                    : ""}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <br />
        <br />
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={props.classes.heading}>
            <b>Step by step directions</b>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper className={props.classes.tableRoot}>
            <Table className={props.classes.table}>
              <TableBody>
                {getDirections(props.directions).map((direction, index) => {
                  return (
                    <TableRow key={Math.random()}>
                      <TableCell align="right">
                        <b>Step {index + 1}</b>
                      </TableCell>
                      <TableCell align="right">
                        <div
                          key={Math.random()}
                          dangerouslySetInnerHTML={direction}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
          <br />
          <br />
          <br />
          <br />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
});

function MapComponent(props) {
  const { origin, destination, classes } = props;

  if (!origin) {
    return <></>;
  }

  if (!origin && destination) {
    return <CircularProgress />;
  }

  return (
    <ExpansionPanel key="nav-map" className={classes.expansionPanel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          <b>Race Directions</b>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid className={classes.root} container>
          <Grid item xs={12} key="map-container">
            <MyMapComponent
              classes={classes}
              isMarkerShown={true}
              origin={origin}
              destination={destination}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default withStyles(styles)(React.memo(MapComponent));
