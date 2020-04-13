import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { Async } from "react-select";
import _ from "lodash";
import "react-select/dist/react-select.css";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  loadingProgressAction,
  chosenRunnersAction,
  chosenRaceAction,
  endIndexAction,
  loadMoreProgressAction
} from "./../actions/search";
import { runnerDetailsAction } from "./../actions/runner";
import { stickyAction } from "./../actions/scroll";
import LoadingProgress from "./../components/LoadingProgress";
import NoResults from "./../components/NoResults";

import {
  search,
  partialSearch,
  searchByRace
} from "./../service/searchService";
import {
  getSession,
  setSession,
  removeSession,
  getLocal,
  setLocal,
  removeLocal,
  removeAllSession
} from "./../service/storageService";
import { upperCaseWords } from "./../utils/stringUtils";

const ArrowUpwardButton = React.lazy(() =>
  import("./../components/ArrowUpwardButton")
);
const ArrowDownwardButton = React.lazy(() =>
  import("./../components/ArrowDownwardButton")
);
const ClearButton = React.lazy(() => import("./../components/ClearButton"));
const RaceDetails = React.lazy(() => import("./../components/RaceDetails"));
const RunnerDetails = React.lazy(() => import("./../components/RunnerDetails"));
const RaceInfo = React.lazy(() => import("./../components/RaceInfo"));
const RaceDropDown = React.lazy(() => import("./../components/RaceDropDown"));
const OverallStats = React.lazy(() => import("./../components/OverallStats"));
const LoadMoreButton = React.lazy(() =>
  import("./../components/LoadMoreButton")
);

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
  }
});

const chosenRunnersKey = "chosenRunners";
const startIndex = 0;

class Runner extends Component {
  constructor(props) {
    super(props);

    this.searchRunnerRef = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.onScroll, false);

    const namesSet = getLocal(chosenRunnersKey);

    if (namesSet) {
      this.props.dispatchChosenRunners(namesSet);
      this.onChange(namesSet);
    }

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
        this.props.dispatchChosenRunners,
        nextProps.dispatchChosenRunners
      )
    ) {
      return true;
    }

    if (!_.isEqual(this.props.dispatchEndIndex, nextProps.dispatchEndIndex)) {
      return true;
    }

    if (
      !_.isEqual(
        this.props.dispatchLoadMoreProgress,
        nextProps.dispatchLoadMoreProgress
      )
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
      !_.isEqual(
        this.props.dispatchRunnerDetails,
        nextProps.dispatchRunnerDetails
      )
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

    if (!_.isEqual(this.props.runnerReducer, nextProps.runnerReducer)) {
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

  performSearch = async runnerName => {
    if (runnerName) {
      this.props.dispatchLoadingProgress(true);
      this.props.dispatchRunnerDetails(null);
      this.props.dispatchChosenRace("");

      const { endIndex } = this.props.searchReducer;
      const cacheKey = `getRunner${runnerName}`.replace(" ", "");
      const runnerInStorage = getSession(cacheKey);
      let result;

      if (!runnerInStorage) {
        result = await search(runnerName, startIndex, endIndex);
        setSession({ key: cacheKey, value: JSON.stringify(result) });
      } else {
        result = JSON.parse(runnerInStorage);
        removeSession(cacheKey);
      }

      this.props.dispatchRunnerDetails(result);
      this.props.dispatchLoadingProgress(false);
      this.scrollToTop();
    }
  };

  searchForRunners = async (runners, newEndIndex) => {
    if (runners && runners.length > 0) {
      let names = [];

      runners.map(eachRunner => {
        names.push(eachRunner.display);
      });

      const cacheKey = `getRunners${names.join(
        ""
      )}${startIndex}${newEndIndex}`.replace(" ", "");
      const runnersInStorage = getSession(cacheKey);
      let runnersDetails;

      if (!runnersInStorage) {
        runnersDetails = await search(names, startIndex, newEndIndex);
        setSession({ key: cacheKey, value: JSON.stringify(runnersDetails) });

        return runnersDetails;
      } else {
        runnersDetails = JSON.parse(runnersInStorage);
        removeSession(cacheKey);
      }

      return runnersDetails;
    }

    return null;
  };

  searchForRunnersByRace = async (runners, race) => {
    if (runners && runners.length > 0) {
      let names = [];

      runners.map(eachRunner => {
        names.push(eachRunner.display);
      });

      const cacheKey = `getRunnersByRace${names.join("")}${race}`.replace(
        " ",
        ""
      );
      const runnersInStorage = getSession(cacheKey);
      let runnersDetails;

      if (!runnersInStorage) {
        runnersDetails = await searchByRace(names, race);
        setSession({ key: cacheKey, value: JSON.stringify(runnersDetails) });

        return runnersDetails;
      } else {
        runnersDetails = JSON.parse(runnersInStorage);
        removeSession(cacheKey);
      }

      return runnersDetails;
    }

    return null;
  };

  handleClick = async event => {
    event.preventDefault();
    const searchValue = this.searchRunnerRef.value.trim();

    if (searchValue !== "") {
      if (upperCaseWords(searchValue) !== this.state.runnerName) {
        await this.performSearch(searchValue);
      }
    } else {
      this.clearClick();
    }
  };

  clearClick = () => {
    this.props.dispatchLoadingProgress(true);
    this.props.dispatchRunnerDetails(null);
    this.props.dispatchSticky(false);
    this.props.dispatchChosenRunners([]);
    this.props.dispatchChosenRace("");
    this.props.dispatchEndIndex(0);

    removeLocal(chosenRunnersKey);
    removeAllSession();

    this.props.dispatchLoadingProgress(false);

    scroll.scrollToTop();
  };

  scrollToTopClick = e => {
    e.preventDefault();
    scroll.scrollToTop();
  };

  scrollToBottomClick = e => {
    e.preventDefault();
    scroll.scrollToBottom();
  };

  loadingProgress = () => {
    return <LoadingProgress />;
  };

  noResultsFound = () => {
    return <NoResults />;
  };

  buildRaceResult = race => {
    let raceResult = race;

    if (raceResult && raceResult.length > 0) {
      raceResult = raceResult[0];
    }

    let raceInfo;

    if (raceResult.raceInfo) {
      raceInfo = (
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RaceInfo raceInfo={raceResult.raceInfo} />
        </Suspense>
      );
    }

    return (
      <div key={raceResult.id}>
        <br />
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RaceDetails race={raceResult} />
        </Suspense>
        {raceInfo}
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RunnerDetails runner={raceResult.runner} />
        </Suspense>
      </div>
    );
  };

  loadMoreOnClick = async event => {
    event.preventDefault();
    const { chosenRunners } = this.props.searchReducer;

    this.props.dispatchLoadMoreProgress(true);

    await this.onChange(chosenRunners);

    this.props.dispatchLoadMoreProgress(false);
  };

  calculateNextEndIndex = runnerNames => {
    const { runnerDetails } = this.props.runnerReducer;
    const { endIndex, chosenRunners } = this.props.searchReducer;

    if (endIndex === 0) {
      return 10;
    }

    if (runnerNames.length === chosenRunners.length) {
      if (endIndex + 10 > runnerDetails.overallStats.noOfRaces) {
        return runnerDetails.overallStats.noOfRaces;
      }

      return endIndex + 10;
    } else {
      return 10;
    }
  };

  onChange = async runnerNames => {
    const { runnersDetails } = this.props.runnerReducer;
    const { chosenRunners, chosenRace, endIndex } = this.props.searchReducer;

    if (runnerNames.length > 0) {
      this.props.dispatchLoadingProgress(true);

      const newEndIndex = this.calculateNextEndIndex(runnerNames);
      const runnersDetailsResult = await this.searchForRunners(
        runnerNames,
        newEndIndex
      );

      if (!_.isEqual(chosenRunners, runnerNames)) {
        this.props.dispatchChosenRunners(runnerNames);
      }

      if (!_.isEqual(runnersDetails, runnersDetailsResult)) {
        this.props.dispatchRunnerDetails(runnersDetailsResult);
      }

      if (endIndex !== newEndIndex) {
        this.props.dispatchEndIndex(newEndIndex);
      }

      if (chosenRace !== "") {
        this.props.dispatchChosenRace("");
      }

      setLocal({ key: chosenRunnersKey, value: runnerNames });

      this.props.dispatchLoadingProgress(false);
    } else {
      this.clearClick();
    }
  };

  fetchRunnerByRace = async (runnerNames, chosenRaceParam) => {
    const { runnersDetails } = this.props.runnerReducer;
    const { chosenRace, chosenRunners } = this.props.searchReducer;

    if (runnerNames.length > 0) {
      const runnersDetailsResult = await this.searchForRunnersByRace(
        runnerNames,
        chosenRaceParam
      );

      if (chosenRaceParam !== chosenRace) {
        this.props.dispatchChosenRace(chosenRaceParam);
      }

      if (!_.isEqual(runnerNames, chosenRunners)) {
        this.props.dispatchChosenRunners(runnerNames);
      }

      if (!_.isEqual(runnersDetails, runnersDetailsResult)) {
        this.props.dispatchRunnerDetails(runnersDetailsResult);
      }

      setLocal({ key: chosenRunnersKey, value: runnerNames });

      this.props.dispatchLoadingProgress(false);
    } else {
      this.clearClick();
    }
  };

  fetchRunners = async (searchValue, callback) => {
    this.props.dispatchLoadingProgress(true);

    if (!searchValue) {
      callback(null, { options: [] });
    }

    if (searchValue.length > 2) {
      callback(null, await partialSearch(searchValue));
    } else {
      callback(null, { options: [] });
    }

    this.props.dispatchLoadingProgress(false);
  };

  debouncedFetchRunners = _.debounce(this.fetchRunners, 100);

  getRunners = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 4) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRunners(searchValue, callback);
  };

  handleChooseRaceChange = async event => {
    const { chosenRunners, endIndex } = this.props.searchReducer;
    const chosenRace = event.target.value;

    this.props.dispatchLoadingProgress(true);

    if (endIndex !== 0) {
      this.props.dispatchEndIndex(0);
    }

    if (chosenRace === "all") {
      await this.onChange(chosenRunners);
    } else {
      await this.fetchRunnerByRace(chosenRunners, chosenRace);
    }

    this.scrollToTop();
  };

  populateOverallStats = () => {
    const { runnerDetails } = this.props.runnerReducer;

    if (runnerDetails.overallStats) {
      return (
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <OverallStats overallStats={runnerDetails.overallStats} />
        </Suspense>
      );
    }

    return null;
  };

  buildChosenRaceList = (chosenRace, races) => {
    let filteredRaces = [];
    if (!chosenRace) {
      chosenRace = "";
    }

    const listOfChosenRaces = chosenRace.split("||");

    if (listOfChosenRaces.length > 1) {
      listOfChosenRaces.map(eachChosenRace => {
        for (let i = 0; i < races.length; i++) {
          if (races[i].name === eachChosenRace) {
            filteredRaces.push(races[i]);
          }
        }
      });
    } else {
      if (races) {
        filteredRaces = races;
      }
    }

    if (filteredRaces.length > 1) {
      filteredRaces = filteredRaces.sort(function(a, b) {
        return new Date(b.dateTime) - new Date(a.dateTime);
      });
    }

    return filteredRaces.map(race => this.buildRaceResult(race));
  };

  render() {
    // @TODO: Tidy this up getting very cluttered
    const { progress, searchField, search } = this.props.classes;
    const {
      loadingProgress,
      chosenRunners,
      chosenRace,
      loadMoreLoading
    } = this.props.searchReducer;
    const { runnerDetails } = this.props.runnerReducer;
    const { sticky } = this.props.scrollReducer;
    const searchClass = sticky ? search : "";
    let { endIndex } = this.props.searchReducer;
    let clearButton;
    let overallStats;
    let raceResults;
    let loadingResults;
    let scrollToTopButton;
    let racesSelect;
    let loadMoreButton;
    let loadMoreLoadingProgress;
    let downwardArrowButtonShow;

    // loading main race results
    if (loadingProgress) {
      loadingResults = this.loadingProgress();
    }

    if (
      runnerDetails != null &&
      runnerDetails.races &&
      runnerDetails.races.length > 0
    ) {
      // Display clear button
      clearButton = this.buildClearButton();
      overallStats = this.populateOverallStats();
      const racesForRunner = runnerDetails.races;

      if (endIndex === 0) {
        endIndex = 10;
      }

      // @TODO : Pass off to a function
      // Filtering races
      if (chosenRace === "") {
        raceResults = racesForRunner.map(race => this.buildRaceResult(race));

        // Load more button
        if (runnerDetails.overallStats.noOfRaces > endIndex) {
          loadMoreButton = (
            <Suspense fallback={<CircularProgress className={progress} />}>
              <LoadMoreButton onClick={this.loadMoreOnClick} />
            </Suspense>
          );
        }
      } else {
        raceResults = this.buildChosenRaceList(chosenRace, runnerDetails.races);

        // Load more button
        if (raceResults.length > endIndex) {
          loadMoreButton = (
            <Suspense fallback={<CircularProgress className={progress} />}>
              <LoadMoreButton onClick={this.loadMoreOnClick} />
            </Suspense>
          );
        }
      }

      // Populating races drop down
      racesSelect = (
        <Suspense fallback={<CircularProgress className={progress} />}>
          <RaceDropDown
            raceNames={runnerDetails.raceNames}
            chosenRace={chosenRace}
            onChange={this.handleChooseRaceChange}
          />
        </Suspense>
      );

      // loading more results
      if (loadMoreLoading) {
        loadMoreLoadingProgress = this.loadingProgress();
        loadMoreButton = null;
        scroll.scrollMore(250);
      } else {
        downwardArrowButtonShow = (
          <Suspense fallback={<CircularProgress className={progress} />}>
            <ArrowDownwardButton onClick={this.scrollToBottomClick} />
          </Suspense>
        );

        if (sticky) {
          scrollToTopButton = (
            <Suspense fallback={<CircularProgress className={progress} />}>
              <ArrowUpwardButton onClick={this.scrollToTopClick} />
            </Suspense>
          );
        }
      }
    } else if (runnerDetails != null && runnerDetails.races.length === 0) {
      raceResults = this.noResultsFound();
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
            name="runner-search-field"
            onChange={this.onChange}
            loadOptions={this.getRunners}
            placeholder="Search Runner"
            noResultsText="No runners found"
            value={chosenRunners}
            multi={true}
            ignoreAccents={false}
          />
          {racesSelect}
          {clearButton}
        </div>
        {downwardArrowButtonShow}
        {loadingResults}
        {overallStats}
        {raceResults}
        {loadMoreLoadingProgress}
        {loadMoreButton}
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
    dispatch(loadingProgressAction(loadingProgress)),
  dispatchRunnerDetails: runnerDetails =>
    dispatch(runnerDetailsAction(runnerDetails)),
  dispatchSticky: sticky => dispatch(stickyAction(sticky)),
  dispatchChosenRunners: chosenRunners =>
    dispatch(chosenRunnersAction(chosenRunners)),
  dispatchChosenRace: chosenRace => dispatch(chosenRaceAction(chosenRace)),
  dispatchEndIndex: endIndex => dispatch(endIndexAction(endIndex)),
  dispatchLoadMoreProgress: loadMoreProgress =>
    dispatch(loadMoreProgressAction(loadMoreProgress))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(React.memo(Runner)));
