import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import RaceListComponent from "./../components/RacesList";
import LoadingProgress from "./../components/LoadingProgress";

import { getAllRaces } from "./../service/searchService";

import { allRacesAction } from "./../actions/race";

const styles = theme => ({});

class RaceList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    this.props.dispatchAllRacesAction(await getAllRaces());
  };

  render() {
    const { raceReducer } = this.props;
    const raceListComponent =
      raceReducer.races.length > 0 ? (
        <Suspense fallback={<LoadingProgress />}>
          <RaceListComponent racesList={raceReducer.races} />
        </Suspense>
      ) : (
        <LoadingProgress />
      );

    return <React.Fragment>{raceListComponent}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatchAllRacesAction: races => dispatch(allRacesAction(races))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(React.memo(RaceList)));
