import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

import MapBasic from "./../components/MapBasic";

import { setLocal, getLocal } from "./../service/storageService";
import { getAllRacesWithGeoLocation } from "./../service/searchService";
import { mapsRacesAction } from "./../actions/maps";

const styles = theme => ({});

class Maps extends Component {
  componentWillMount = async () => {
    this.props.dispatchMapsRacesAction(await getAllRacesWithGeoLocation());
  };

  render() {
    const { races } = this.props.mapsReducer;

    console.log("races", races);

    return (
      <React.Fragment>
        <Suspense fallback={<CircularProgress />}>
          <MapBasic races={races} />
        </Suspense>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatchMapsRacesAction: races => dispatch(mapsRacesAction(races))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(React.memo(Maps)));
