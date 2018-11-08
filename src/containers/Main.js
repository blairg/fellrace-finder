import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { Async } from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { partialNameAction, loadingProgressAction } from './../actions/search';
import { runnerDetailsAction } from './../actions/runner';
import { stickyAction } from './../actions/scroll';
import LoadingProgress from './../components/LoadingProgress';
import NoResults from './../components/NoResults';

import {
  search,
  partialSearch,
  searchByRace,
} from './../service/searchService';
import {
  getSession,
  setSession,
  removeSession,
  getLocal,
  setLocal,
  removeLocal,
  removeAllSession,
} from './../service/storageService';
import { upperCaseWords } from './../utils/stringUtils';

const ArrowUpwardButton = React.lazy(() => import('./../components/ArrowUpwardButton'));
const ArrowDownwardButton = React.lazy(() => import('./../components/ArrowDownwardButton'));
const ClearButton = React.lazy(() => import('./../components/ClearButton'));
const RaceDetails = React.lazy(() => import('./../components/RaceDetails'));
const RunnerDetails = React.lazy(() => import('./../components/RunnerDetails'));
const RaceInfo = React.lazy(() => import('./../components/RaceInfo'));
const RaceDropDown = React.lazy(() => import('./../components/RaceDropDown'));
const OverallStats = React.lazy(() => import('./../components/OverallStats'));
const LoadMoreButton = React.lazy(() => import('./../components/LoadMoreButton'));

const styles = theme => ({
  searchField: {
    paddingBottom: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    marginTop: '-20px',
    zIndex: '2',
  },
  search: {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'white',
    zIndex: '2 !important',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const chosenRunnersKey = 'chosenRunners';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.searchRunnerRef = React.createRef();

    const namesSet = getLocal(chosenRunnersKey);
    let chosenRunners = [];

    if (namesSet) {
      chosenRunners = namesSet;
    }

    this.state = {
      runnerName: '',
      //runner: null,
      races: null,
      //sticky: false,
      //loadingResults: true,
      value: chosenRunners,
      chosenRace: '',
      chosenRunners: chosenRunners,
      startIndex: 0,
      endIndex: 0,
      loadMoreLoading: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll, false);
    this.onChange(this.state.chosenRunners);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  buildClearButton = () => {
    return <Suspense fallback={<CircularProgress className={styles.prototypeprogress} />}>
            <ClearButton onClick={this.clearClick} />
          </Suspense>;
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
      this.props.dispatchRunnerDetails(null);

      this.setState({ //runner: null, 
        loadingResults: true, chosenRace: '' });
      const { startIndex, endIndex } = this.state;
      const cacheKey = `getRunner${runnerName}`.replace(' ', '');
      const formattedName = runnerName;
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

      this.setState({
        //runner: result,
        runnerName: formattedName,
        loadingResults: false,
      });
      this.scrollToTop();
    }
  };

  searchForRunners = async (runners, newEndIndex) => {
    if (runners && runners.length > 0) {
      const { startIndex } = this.state;
      let names = [];

      runners.map(eachRunner => {
        names.push(eachRunner.display);
      });

      const cacheKey = `getRunners${names.join(
        '',
      )}${startIndex}${newEndIndex}`.replace(' ', '');
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

      const cacheKey = `getRunnersByRace${names.join('')}${race}`.replace(
        ' ',
        '',
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

    if (searchValue !== '') {
      if (upperCaseWords(searchValue) !== this.state.runnerName) {
        await this.performSearch(searchValue);
      }
    } else {
      this.clearClick();
    }
  };

  clearClick = () => {
    this.props.dispatchRunnerDetails(null);
    this.props.dispatchSticky(false);

    this.setState({
      //sticky: false,
      //runner: null,
      runnerName: null,
      loadingResults: false,
      chosenRace: '',
      chosenRunners: [],
      endIndex: 0,
    });

    removeLocal(chosenRunnersKey);
    removeAllSession();

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
    let raceInfo;

    if (race.raceInfo) {
      raceInfo = <Suspense fallback={<CircularProgress className={styles.progress} />}>
                  <RaceInfo raceInfo={race.raceInfo} />
                </Suspense>;
    }

    return (
      <div key={race.id}>
        <br />
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RaceDetails race={race} />
        </Suspense>
        {raceInfo}
        <Suspense fallback={<CircularProgress className={styles.progress} />}>
          <RunnerDetails runner={race.runner} />
        </Suspense>
      </div>
    );
  };

  loadMoreOnClick = async event => {
    event.preventDefault();
    const { chosenRunners } = this.state;

    this.setState({
      loadMoreLoading: true,
    });

    await this.onChange(chosenRunners);

    this.setState({
      loadMoreLoading: false,
    });
  };

  calculateNextEndIndex = runnerNames => {
    const { endIndex, chosenRunners, runner } = this.state;

    if (endIndex === 0) {
      return 10;
    }

    if (runnerNames.length === chosenRunners.length) {
      if (endIndex + 10 > runner.overallStats.noOfRaces) {
        return runner.overallStats.noOfRaces;
      }

      return endIndex + 10;
    } else {
      return 10;
    }
  };

  onChange = async runnerNames => {
    if (runnerNames.length > 0) {
      this.props.dispatchLoadingProgress(true);

      const newEndIndex = this.calculateNextEndIndex(runnerNames);
      const runnersDetails = await this.searchForRunners(
        runnerNames,
        newEndIndex,
      );

      this.props.dispatchRunnerDetails(runnersDetails);

      this.setState({
        //runner: runnersDetails,
        runnerName: runnerNames[0].display,
        loadingResults: false,
        chosenRunners: runnerNames,
        endIndex: newEndIndex,
        chosenRace: '',
      });

      this.props.dispatchLoadingProgress(false);

      setLocal({ key: chosenRunnersKey, value: runnerNames });
    } else {
      this.clearClick();
    }
  };

  fetchRunnerByRace = async (runnerNames, chosenRace) => {
    if (runnerNames.length > 0) {
      this.props.dispatchLoadingProgress(true);

      const runnersDetails = await this.searchForRunnersByRace(
        runnerNames,
        chosenRace,
      );

      this.props.dispatchRunnerDetails(runnersDetails);

      this.setState({
        //runner: runnersDetails,
        runnerName: runnerNames[0].display,
        chosenRunners: runnerNames,
        chosenRace: chosenRace,
      });

      this.props.dispatchLoadingProgress(false);

      setLocal({ key: chosenRunnersKey, value: runnerNames });
    } else {
      this.clearClick();
    }
  };

  fetchRunners = async (searchValue, callback) => {
    console.log('searching - ', searchValue);

    if (!searchValue) {
      callback(null, { options: [] });
    }

    if (searchValue.length > 2) {
      callback(null, await partialSearch(searchValue));
    } else {
      callback(null, { options: [] });
    }
  };

  debouncedFetchRunners = _.debounce(this.fetchRunners, 100);

  getRunners = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 4) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRunners(searchValue, callback);
  };

  handleChooseRaceChange = async event => {
    const { chosenRunners } = this.state;
    const chosenRace = event.target.value;

    this.setState({
      loadingResults: true,
      endIndex: 0,
    });

    if (chosenRace === 'all') {
      await this.onChange(chosenRunners);
    } else {
      await this.fetchRunnerByRace(chosenRunners, chosenRace);
    }

    this.scrollToTop();
  };

  populateOverallStats = () => {
    const { runnerDetails } = this.props.runnerReducer;

    if (runnerDetails.overallStats) {
      return  <Suspense fallback={<CircularProgress className={styles.progress} />}>
                <OverallStats overallStats={runnerDetails.overallStats} />
              </Suspense>;
    }

    return null;
  };

  buildChosenRaceList = (chosenRace, races) => {
    let filteredRaces = [];
    const listOfChosenRaces = chosenRace.split('||');

    if (listOfChosenRaces.length > 1) {
      listOfChosenRaces.map(eachChosenRace => {
        for (let i = 0; i < races.length; i++) {
          if (races[i][0].name === eachChosenRace) {
            filteredRaces.push(races[i][0]);
            break;
          }
        }
      });
    } else {
      if (races) {
        filteredRaces = races[0];
      }
    }

    return filteredRaces.map(race => this.buildRaceResult(race));
  };

  render() {
    // @TODO: Tidy this up getting very cluttered
    const {
      //runner,
      chosenRace,
      //loadingResults,
      //sticky,
      chosenRunners,
      endIndex,
      loadMoreLoading,
    } = this.state;
    const { progress, searchField, search } = this.props.classes;
    const { loadingProgress } = this.props.searchReducer;
    const { runnerDetails } = this.props.runnerReducer;
    const { sticky } = this.props.scrollReducer;
    const searchClass = sticky ? search : '';
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

    if (runnerDetails != null && runnerDetails.races && runnerDetails.races.length > 0) {
      // Display clear button
      clearButton = this.buildClearButton();
      overallStats = this.populateOverallStats();
      const racesForRunner = runnerDetails.races;

      // Filtering races
      if (chosenRace === '') {
        raceResults = racesForRunner.map(race => this.buildRaceResult(race));

        // Load more button
        if (runnerDetails.overallStats.noOfRaces > endIndex) {
          loadMoreButton = <Suspense fallback={<CircularProgress className={progress} />}>
                            <LoadMoreButton onClick={this.loadMoreOnClick} />
                          </Suspense>;
        }
      } else {
        raceResults = this.buildChosenRaceList(chosenRace, runnerDetails.races);

        // Load more button
        if (runnerDetails.races > endIndex) {
          loadMoreButton = <Suspense fallback={<CircularProgress className={progress} />}>
                             <LoadMoreButton onClick={this.loadMoreOnClick} />
                           </Suspense>;
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
        scroll.scrollMore(170);
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
  dispatchPartialName: () => dispatch(partialNameAction()),
  dispatchLoadingProgress: (loadingProgress) => dispatch(loadingProgressAction(loadingProgress)),
  dispatchRunnerDetails: (details) => dispatch(runnerDetailsAction(details)),
  dispatchSticky: (sticky) => dispatch(stickyAction(sticky)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
