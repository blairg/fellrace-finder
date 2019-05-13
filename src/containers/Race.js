/* global google */

import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { Async } from "react-select";
import _ from "lodash";
import "react-select/dist/react-select.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  partialRaceSearch,
  getRaceInfoByNames
} from "./../service/searchService";
import {
  loadingProgressRaceAction,
  chosenRacesAction
} from "./../actions/search";
import { raceDetailsAction, userOriginAction } from "./../actions/race";
import { stickyAction } from "./../actions/scroll";
import {
  getSession,
  setSession,
  removeSession,
  getLocal,
  setLocal,
  removeLocal
} from "./../service/storageService";

import LoadingProgress from "./../components/LoadingProgress";
import NoResults from "./../components/NoResults";

const ArrowUpwardButton = React.lazy(() =>
  import("./../components/ArrowUpwardButton")
);
const ArrowDownwardButton = React.lazy(() =>
  import("./../components/ArrowDownwardButton")
);
const RaceInfo = React.lazy(() => import("./../components/RaceInfo"));
const ClearButton = React.lazy(() => import("./../components/ClearButton"));
const ResultCategory = React.lazy(() =>
  import("./../components/ResultCategory")
);
const YearResultCategory = React.lazy(() =>
  import("./../components/YearResultCategory")
);
const RacePerformancePanel = React.lazy(() =>
  import("./../components/RacePerformancePanel")
);
const MapComponent = React.lazy(() => import("./../components/MapComponent"));
const SameDayRaces = React.lazy(() => import("./../components/SameDayRaces"));

const styles = theme => ({
  searchField: {
    paddingBottom: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginTop: "-5px",
    zIndex: "2"
  },
  search: {
    position: "sticky",
    backgroundColor: "white",
    zIndex: "2 !important",
    borderBottom: "1px solid #CCCCCC",
    top: "40px",
    paddingTop: "40px",
    borderTop: "1px solid #CCCCCC",
    paddingBottom: "2px"
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  expansionPanel: {
    marginTop: "5px",
    marginBottom: "15px"
  }
});

const chosenRacesKey = "chosenRaces";
const directionsDestinationKey = "directionsDestinationKey";
const originKey = "origin";

class Race extends Component {
  constructor(props) {
    super(props);

    this.searchRaceRef = React.createRef();
  }

  getOrigin = () => {
    let cachedOrigin = getSession(originKey);
    let origin;

    if (!cachedOrigin && navigator.geolocation) {
      var self = this;

      const geoSuccess = function(position) {
        origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setSession({ key: originKey, value: JSON.stringify(origin) });
        self.props.dispatchOrigin(origin);
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    } else {
      origin = JSON.parse(cachedOrigin);
      this.props.dispatchOrigin(origin);
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll, false);

    const racesSet = getLocal(chosenRacesKey);

    if (racesSet) {
      this.props.dispatchLoadingProgress(true);
      this.props.dispatchChosenRace(racesSet);
      this.onChange(racesSet);
      this.props.dispatchLoadingProgress(false);
    }

    this.getOrigin();
    scroll.scrollTo(0);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.onScroll, false);
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (!_.isEqual(this.props.classes, nextProps.classes)) {
      return true;
    }

    if (
      !_.isEqual(this.props.dispatchChosenRace, nextProps.dispatchChosenRace)
    ) {
      return true;
    }

    if (
      !_.isEqual(
        this.props.dispatchLoadingProgress,
        nextProps.dispatchLoadingProgress
      )
    ) {
      return true;
    }

    if (
      !_.isEqual(this.props.dispatchRaceDetails, nextProps.dispatchRaceDetails)
    ) {
      return true;
    }

    if (!_.isEqual(this.props.dispatchSticky, nextProps.dispatchSticky)) {
      return true;
    }

    if (!_.isEqual(this.props.menuReducer, nextProps.menuReducer)) {
      return true;
    }

    if (!_.isEqual(this.props.raceReducer, nextProps.raceReducer)) {
      return true;
    }

    if (!_.isEqual(this.props.scrollReducer, nextProps.scrollReducer)) {
      return true;
    }

    if (!_.isEqual(this.props.searchReducer, nextProps.searchReducer)) {
      return true;
    }

    return false;
  };

  buildClearButton = () => {
    return (
      <Suspense
        fallback={<CircularProgress className={styles.prototypeprogress} />}
      >
        <ClearButton onClick={this.clearClick} />
      </Suspense>
    );
  };

  onScroll = () => {
    if (window.scrollY >= 165 && !this.props.scrollReducer.sticky) {
      this.props.dispatchSticky(true);
    } else if (window.scrollY < 165 && this.props.scrollReducer.sticky) {
      this.props.dispatchSticky(false);
    }
  };

  scrollToTop = () => {
    scroll.scrollTo(170);
  };

  loadingProgress = () => {
    return <LoadingProgress />;
  };

  noResultsFound = () => {
    return <NoResults />;
  };

  scrollToTopClick = e => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  scrollToBottomClick = e => {
    e.preventDefault();
    scroll.scrollToBottom();
  };

  onChange = async raceNames => {
    const { raceDetails } = this.props.raceReducer;
    const { chosenRaces } = this.props.searchReducer;

    if (raceNames.length > 1) {
      // @TODO: tidy up this hack so the user can only choose one race
      this.props.dispatchChosenRace(chosenRaces);
      this.props.dispatchLoadingProgress(false);

      return;
    }

    if (raceNames.length === 1) {
      this.props.dispatchLoadingProgress(true);

      const raceDetailsResult = await this.searchForRaces(raceNames);

      if (!_.isEqual(chosenRaces, raceNames)) {
        this.props.dispatchChosenRace(raceNames);
      }

      if (!_.isEqual(raceDetails, raceDetailsResult)) {
        this.props.dispatchRaceDetails(raceDetailsResult);
      }

      setLocal({ key: chosenRacesKey, value: raceNames });

      this.props.dispatchLoadingProgress(false);
    } else {
      this.clearClick();
    }
  };

  fetchRaces = async (searchValue, callback) => {
    console.log("searching - ", searchValue);
    this.props.dispatchLoadingProgress(true);

    if (!searchValue) {
      callback(null, { options: [] });
    }

    if (searchValue.length > 2) {
      callback(null, await partialRaceSearch(searchValue));
    } else {
      callback(null, { options: [] });
    }
    this.props.dispatchLoadingProgress(false);
  };

  debouncedFetchRaces = _.debounce(this.fetchRaces, 200);

  getRaces = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 3) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRaces(searchValue, callback);
  };

  searchForRaces = async race => {
    if (race) {
      const cacheKey = `getRaces${race[0].display}`.replace(" ", "");
      const raceInStorage = getSession(cacheKey);
      let raceDetails;

      if (!raceInStorage) {
        raceDetails = await getRaceInfoByNames(race[0].original);
        setSession({ key: cacheKey, value: JSON.stringify(raceDetails) });

        return raceDetails;
      } else {
        raceDetails = JSON.parse(raceInStorage);
        removeSession(cacheKey);
      }

      return raceDetails;
    }

    return null;
  };

  clearClick = () => {
    this.props.dispatchLoadingProgress(true);
    this.props.dispatchSticky(false);
    this.props.dispatchRaceDetails(null);
    this.props.dispatchChosenRace(null);

    removeLocal(chosenRacesKey);
    removeSession(directionsDestinationKey);

    this.props.dispatchLoadingProgress(false);

    scroll.scrollToTop();
  };

  buildRaceInfo = raceInfo => {
    let raceInfoComponent;

    if (raceInfo) {
      if (raceInfo._latitude > 0) {
        delete raceInfo._latitude; //not needed at there is google maps directions
      }

      raceInfoComponent = (
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RaceInfo raceInfo={raceInfo} />
        </Suspense>
      );
    }

    return <div key={raceInfo.id}>{raceInfoComponent}</div>;
  };

  buildResultCategories = (categoryRecords, classes) => {
    let resultCategoryComponent;

    if (categoryRecords) {
      resultCategoryComponent = (
        <Suspense fallback={<CircularProgress className={classes.progress} />}>
          <ResultCategory categoryRecords={categoryRecords} />
        </Suspense>
      );
    }

    return (
      <React.Fragment>
        <ExpansionPanel
          key={categoryRecords.length}
          className={classes.expansionPanel}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              <b>Overall</b>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {resultCategoryComponent}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  };

  buildYearResultCategories = races => {
    let yearResultsComponent;

    if (races) {
      yearResultsComponent = (
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <YearResultCategory races={races} />
          <br />
          <br />
          <br />
          <br />
        </Suspense>
      );
    }

    return yearResultsComponent;
  };

  buildYearPerformanceGraph = (races, progressClass) => {
    const performanceData = races
      .map(race => {
        if (race.performance > 0) {
          return [`${race.year}`, `${race.performance}%`];
        }
      })
      .filter(race => race !== undefined);

    return (
      <Suspense fallback={<CircularProgress className={progressClass} />}>
        <RacePerformancePanel raceData={performanceData} />
      </Suspense>
    );
  };

  buildDownwardArrow = progress => {
    return (
      <Suspense fallback={<CircularProgress className={progress} />}>
        <ArrowDownwardButton onClick={this.scrollToBottomClick} />
      </Suspense>
    );
  };

  buildMapComponent = (origin, destination, progress) => {
    return (
      <Suspense fallback={<CircularProgress className={progress} />}>
        <MapComponent destination={destination} origin={origin} />
      </Suspense>
    );
  };

  buildSameDayRaces = (origin, races, sameDayRaces, progress) => {
    const yearOfFirstRace = parseInt(races[0].date.substring(6, 10));
    const yearNow = new Date().getFullYear();

    if (
      yearOfFirstRace < yearNow ||
      !sameDayRaces ||
      sameDayRaces.length === 0
    ) {
      return null;
    }

    return (
      <Suspense fallback={<CircularProgress className={progress} />}>
        <SameDayRaces origin={origin} races={sameDayRaces} />
      </Suspense>
    );
  };

  render() {
    const { progress, searchField, search } = this.props.classes;
    const { loadingRaceProgress, chosenRaces } = this.props.searchReducer;
    const { raceDetails, origin } = this.props.raceReducer;
    const { sticky } = this.props.scrollReducer;
    const searchClass = sticky ? search : "";
    let clearButton;
    let loadingResults;
    let raceInfoComponent;
    let resultCategoryComponent;
    let scrollToTopButton;
    let downwardArrowButtonShow;
    let yearResultsComponent;
    let racePerformancePanelComponent;
    let mapDirectionComponent;
    let sameDayRacesComponent;

    // loading race details
    if (loadingRaceProgress) {
      loadingResults = this.loadingProgress();
    }

    if (chosenRaces && chosenRaces.length > 0) {
      clearButton = this.buildClearButton();
    }

    if (raceDetails) {
      raceInfoComponent = this.buildRaceInfo(raceDetails.raceInfo);
      resultCategoryComponent = this.buildResultCategories(
        raceDetails.categoryRecords,
        this.props.classes
      );
      yearResultsComponent = this.buildYearResultCategories(raceDetails.races);
      racePerformancePanelComponent = this.buildYearPerformanceGraph(
        raceDetails.races,
        progress
      );
      downwardArrowButtonShow = this.buildDownwardArrow(progress);

      if (origin) {
        sameDayRacesComponent = this.buildSameDayRaces(
          origin,
          raceDetails.races,
          raceDetails.racesSameDay,
          progress
        );
      }

      if (
        origin &&
        raceDetails.properties &&
        raceDetails.properties.latitude &&
        raceDetails.properties.latitude !== 0
      ) {
        const destination = {
          lat: raceDetails.properties.latitude,
          lng: raceDetails.properties.longitude
        };
        mapDirectionComponent = this.buildMapComponent(
          origin,
          destination,
          progress
        );
      }
    }

    if (sticky) {
      scrollToTopButton = (
        <Suspense fallback={<CircularProgress className={progress} />}>
          <ArrowUpwardButton onClick={this.scrollToTopClick} />
        </Suspense>
      );
    }

    return (
      <React.Fragment>
        <div className={searchClass}>
          <Async
            cacheOptions
            defaultOptions
            className={searchField}
            valueKey="original"
            labelKey="display"
            matchProp="any"
            name="race-search-field"
            onChange={this.onChange}
            loadOptions={this.getRaces}
            placeholder="Search Race"
            noResultsText="No race found"
            value={chosenRaces}
            multi={true}
            ignoreAccents={false}
          />
          {clearButton}
        </div>
        {loadingResults}
        {raceInfoComponent}
        {mapDirectionComponent}
        {sameDayRacesComponent}
        {racePerformancePanelComponent}
        {resultCategoryComponent}
        {yearResultsComponent}
        {downwardArrowButtonShow}
        {scrollToTopButton}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadingProgress: loadingProgress =>
    dispatch(loadingProgressRaceAction(loadingProgress)),
  dispatchChosenRace: chosenRace => dispatch(chosenRacesAction(chosenRace)),
  dispatchRaceDetails: raceDetails => dispatch(raceDetailsAction(raceDetails)),
  dispatchSticky: sticky => dispatch(stickyAction(sticky)),
  dispatchOrigin: origin => dispatch(userOriginAction(origin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(React.memo(Race)));
