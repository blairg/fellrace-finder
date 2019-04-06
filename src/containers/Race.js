import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { Async } from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { partialRaceSearch } from './../service/searchService';
import { loadingProgressRaceAction, chosenRacesAction, } from './../actions/search';
import { getLocal, setLocal, removeLocal, } from './../service/storageService';
// import { stickyAction } from './../actions/scroll';

import LoadingProgress from './../components/LoadingProgress';
import NoResults from './../components/NoResults';

const ClearButton = React.lazy(() => import('./../components/ClearButton'));

const styles = theme => ({
  searchField: {
    paddingBottom: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    marginTop: '-5px',
    zIndex: '2',
  },
  search: {
    position: 'sticky',
    backgroundColor: 'white',
    zIndex: '2 !important',
    borderBottom: '1px solid #CCCCCC',
    top: '40px',
    paddingTop: '40px',
    borderTop: '1px solid #CCCCCC',
    paddingBottom: '2px',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const chosenRacesKey = 'chosenRaces';

class Race extends PureComponent {
  constructor(props) {
    super(props);

		this.searchRaceRef = React.createRef();
  }

  componentDidMount = () => {
    //window.addEventListener('scroll', this.onScroll, false);

    const racesSet = getLocal(chosenRacesKey);

    if (racesSet) {
      this.props.dispatchChosenRaces(racesSet);
      this.onChange(racesSet);
    }
  };

  buildClearButton = () => {
    return <Suspense fallback={<CircularProgress className={styles.prototypeprogress} />}>
            <ClearButton onClick={this.clearClick} />
          </Suspense>;
  };

  loadingProgress = () => {
    return <LoadingProgress />;
  };

  noResultsFound = () => {
    return <NoResults />;
  };

  onChange = async raceNames => {
    // const { raceDetails } = this.props.raceReducer;
    const { chosenRaces } = this.props.searchReducer;

    if (raceNames.length > 0) {
      this.props.dispatchLoadingProgress(true);
      // const newEndIndex = this.calculateNextEndIndex(runnerNames);
      // const runnersDetailsResult = await this.searchForRunners(
      //   runnerNames,
      //   newEndIndex,
      // );

      // if (!_.isEqual(chosenRunners, runnerNames)) {
      //   this.props.dispatchChosenRunners(runnerNames);
      // }

      // if (!_.isEqual(runnersDetails, runnersDetailsResult)) {
      //   this.props.dispatchRunnerDetails(runnersDetailsResult);
      // }

      // if (endIndex !== newEndIndex) {
      //   this.props.dispatchEndIndex(newEndIndex);
      // }

      // if (chosenRace !== '') {
      //   this.props.dispatchChosenRace('');
      // }

      if (!_.isEqual(chosenRaces, raceNames)) {
        this.props.dispatchChosenRaces(raceNames);
      }

      setLocal({ key: chosenRacesKey, value: raceNames });

      this.props.dispatchLoadingProgress(false);
    } else {
      this.clearClick();
    }
  };

  fetchRaces = async (searchValue, callback) => {
    console.log('searching - ', searchValue);

    if (!searchValue) {
      callback(null, { options: [] });
    }

    if (searchValue.length > 2) {
      callback(null, await partialRaceSearch(searchValue));
    } else {
      callback(null, { options: [] });
    }
  };

	debouncedFetchRaces = _.debounce(this.fetchRaces, 100);

  getRaces = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 3) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRaces(searchValue, callback);

		// return callback(null, { options: [] });
  };

  clearClick = () => {
    this.props.dispatchLoadingProgress(true);
    // this.props.dispatchSticky(false);
    this.props.dispatchChosenRaces([]);

    removeLocal(chosenRacesKey);

    this.props.dispatchLoadingProgress(false);

    // scroll.scrollToTop();
  };

  render() {
    const { searchField, search } = this.props.classes;
    const { loadingRaceProgress, chosenRaces } = this.props.searchReducer;
    const { sticky } = this.props.scrollReducer;
    const searchClass = sticky ? search : '';
    let clearButton;
    let loadingResults;

    // loading main race results
    if (loadingRaceProgress) {
      loadingResults = this.loadingProgress();
    }

    if (chosenRaces && chosenRaces.length > 0) {
      clearButton = this.buildClearButton();
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
           {/* {racesSelect}
           {clearButton} */}
        </div>
        {loadingResults}
        {/*  {downwardArrowButtonShow}
         {loadingResults}
         {overallStats}
         {raceResults}
         {loadMoreLoadingProgress}
         {loadMoreButton}
         {scrollToTopButton} */}
      </React.Fragment>
  	);
 	}
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
  dispatchLoadingProgress: (loadingProgress) => dispatch(loadingProgressRaceAction(loadingProgress)),
  dispatchChosenRaces: (chosenRaces) => dispatch(chosenRacesAction(chosenRaces)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Race));