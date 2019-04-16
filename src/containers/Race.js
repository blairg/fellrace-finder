import React, { PureComponent, Suspense } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { Async } from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';
// Material-UI
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { partialRaceSearch, getRaceInfoByNames } from './../service/searchService';
import { loadingProgressRaceAction, chosenRacesAction, } from './../actions/search';
import { raceDetailsAction, } from './../actions/race';
import { stickyAction } from './../actions/scroll';
import { getSession,
  setSession,
  removeSession, getLocal, setLocal, removeLocal, } from './../service/storageService';

import LoadingProgress from './../components/LoadingProgress';
import NoResults from './../components/NoResults';

const ArrowUpwardButton = React.lazy(() => import('./../components/ArrowUpwardButton'));
const ArrowDownwardButton = React.lazy(() => import('./../components/ArrowDownwardButton'));
const RaceInfo = React.lazy(() => import('./../components/RaceInfo'));
const ClearButton = React.lazy(() => import('./../components/ClearButton'));
const ResultCategory = React.lazy(() => import('./../components/ResultCategory'));

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
    window.addEventListener('scroll', this.onScroll, false);

    const racesSet = getLocal(chosenRacesKey);

    if (racesSet) {
      this.props.dispatchChosenRace(racesSet);
      this.onChange(racesSet);
    }

    scroll.scrollTo(0);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  onScroll = () => {
    if (window.scrollY >= 165 && !this.props.scrollReducer.sticky) {
      this.props.dispatchSticky(true);
    } else if (window.scrollY < 165 && this.props.scrollReducer.sticky) {
      this.props.dispatchSticky(false);
    }
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

	debouncedFetchRaces = _.debounce(this.fetchRaces, 200);

  getRaces = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 3) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRaces(searchValue, callback);
  };

  searchForRaces = async (race) => {
    if (race) {
      const cacheKey = `getRaces${race[0].display}`.replace(' ', '');
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
    console.log('cleared out ');
    this.props.dispatchLoadingProgress(true);
    // this.props.dispatchSticky(false);
    this.props.dispatchRaceDetails(null);
    this.props.dispatchChosenRace(null);

    removeLocal(chosenRacesKey);

    this.props.dispatchLoadingProgress(false);

    // scroll.scrollToTop();
  };

  buildRaceInfo = raceInfo => {
    let raceInfoComponent;

    if (raceInfo) {
      raceInfoComponent = <Suspense fallback={<CircularProgress className={styles.progress} />}>
                  <RaceInfo raceInfo={raceInfo} />
                </Suspense>;
    }

    return (
      <div key={raceInfo.id}>
        {raceInfoComponent}
      </div>
    );
  };

  buildResultCategories = categoryRecords => {
    let resultCategoryComponent;

    if (categoryRecords) {
      resultCategoryComponent = <Suspense fallback={<CircularProgress className={styles.progress} />}>
                  <ResultCategory categoryRecords={categoryRecords} />
                </Suspense>;
    }

    return (
      <>
        {resultCategoryComponent}
      </>
    );
  };

  render() {
    const { progress, searchField, search } = this.props.classes;
    const { loadingRaceProgress, chosenRaces } = this.props.searchReducer;
    const { raceDetails } = this.props.raceReducer;
    const { sticky } = this.props.scrollReducer;
    const searchClass = sticky ? search : '';
    let clearButton;
    let loadingResults;
    let raceInfoComponent;
    let resultCategoryComponent;
    let scrollToTopButton;
    let downwardArrowButtonShow;

    // loading race details
    if (loadingRaceProgress) {
      loadingResults = this.loadingProgress();
    }

    if (chosenRaces && chosenRaces.length > 0) {
      clearButton = this.buildClearButton();
    }

    if (raceDetails) {
      raceInfoComponent = this.buildRaceInfo(raceDetails.raceInfo);
      resultCategoryComponent = this.buildResultCategories(raceDetails.categoryRecords);

      downwardArrowButtonShow = (
        <Suspense fallback={<CircularProgress className={progress} />}>
                <ArrowDownwardButton onClick={this.scrollToBottomClick} />
              </Suspense>
      );
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
        {resultCategoryComponent}
        {downwardArrowButtonShow}
        {scrollToTopButton}
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
  dispatchChosenRace: (chosenRace) => dispatch(chosenRacesAction(chosenRace)),
  dispatchRaceDetails: (raceDetails) => dispatch(raceDetailsAction(raceDetails)),
  dispatchSticky: (sticky) => dispatch(stickyAction(sticky)),
 });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Race));