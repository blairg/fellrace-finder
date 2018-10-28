import React, { PureComponent } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Async } from 'react-select';
import _ from 'lodash';
import 'react-select/dist/react-select.css';

// Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import RaceDetails from './RaceDetails';
import RunnerDetails from './RunnerDetails';
import RaceInfo from './RaceInfo';
import OverallStats from './OverallStats';

import { search, partialSearch, searchByRace } from './../service/searchService';
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

const styles = theme => ({
  searchField: {
    paddingBottom: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    marginTop: '-20px',
    zIndex: '2',
  },
  searchButton: {
    marginRight: '4px',
  },
  clearButton: {
    marginRight: '4px',
  },
  scrollToTopButton: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '5px',
    right: '1%',
  },
  search: {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'white',
    zIndex: '2 !important',
  },
  noRaces: {
    marginRight: '10px',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  suggestions: {
    marginTop: '3px',
    marginLeft: '5px',
    marginRight: theme.spacing.unit,
    minWidth: '30px',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const clearButtonTheme = createMuiTheme({
  palette: {
    primary: {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
  },
});

const chosenRunnersKey = 'chosenRunners';

class Search extends PureComponent {
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
      runner: null,
      races: null,
      sticky: false,
      loadingResults: false,
      value: chosenRunners,
      chosenRace: '',
      chosenRunners: chosenRunners,
      startIndex: 0,
      endIndex: 0,
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
    const { classes } = this.props;
    const clearButton = (
      <MuiThemeProvider theme={clearButtonTheme}>
        <Button
          variant="fab"
          color="primary"
          className={classes.clearButton}
          onClick={this.clearClick}
        >
          <ClearAllIcon />
        </Button>
      </MuiThemeProvider>
    );

    return clearButton;
  };

  onScroll = () => {
    if (window.scrollY >= 165 && !this.state.sticky) {
      this.setState({ sticky: true });
    } else if (window.scrollY < 165 && this.state.sticky) {
      this.setState({ sticky: false });
    }
  };

  scrollToTop = () => {
    scroll.scrollTo(170);
  }

  performSearch = async runnerName => {
    if (runnerName) {
      this.setState({ runner: null, loadingResults: true, chosenRace: '', });
      const { startIndex, endIndex } = this.state;
      const cacheKey = `getRunner${runnerName}`.replace(' ', '');
      const formattedName = runnerName;
      const runnerInStorage = getSession(cacheKey);
      let result;

      if (!runnerInStorage) {
        result = await search(runnerName, startIndex, endIndex);
        setSession({key: cacheKey, value: JSON.stringify(result)});
      } else {
        result = JSON.parse(runnerInStorage);
        removeSession(cacheKey);
      }

      this.setState({
        runner: result,
        runnerName: formattedName,
        loadingResults: false,
      });
      this.scrollToTop();
    }
  };

  searchForRunners = async (runners, newEndIndex) => {
    if (runners && runners.length > 0) {
      const { startIndex} = this.state;
      let names = [];
      
      runners.map((eachRunner) => {
        names.push(eachRunner.display);
      });

      const cacheKey = `getRunners${names.join('')}${startIndex}${newEndIndex}`.replace(' ', '');
      const runnersInStorage = getSession(cacheKey);
      let runnersDetails;

      if (!runnersInStorage) {
        runnersDetails = await search(names, startIndex, newEndIndex);
        setSession({key: cacheKey, value: JSON.stringify(runnersDetails)});

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

      runners.map((eachRunner) => {
        names.push(eachRunner.display);
      });

      const cacheKey = `getRunnersByRace${names.join('')}${race}`.replace(' ', '');
      const runnersInStorage = getSession(cacheKey);
      let runnersDetails;

      if (!runnersInStorage) {
        runnersDetails = await searchByRace(names, race);
        setSession({key: cacheKey, value: JSON.stringify(runnersDetails)});

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
    this.setState({
      sticky: false,
      runner: null,
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

  // @TODO: Move out of function scope to a service
  loadingProgress = () => {
    return (
      <span>
        <br />
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" variant="query" />
        <br />
        <LinearProgress />
      </span>
    );
  };

  noResultsFound = cssClass => {
    return (
      <Paper className={cssClass}>
        <Typography variant="subheading">
          No race results found for this runner!
        </Typography>
      </Paper>
    );
  };

  buildRaceResult = race => {
    let raceInfo;

    if (race.raceInfo) {
      raceInfo = <RaceInfo raceInfo={race.raceInfo} />;
    }

    return (
      <div key={race.id}>
        <br />
        <RaceDetails race={race} />
        {raceInfo}
        <RunnerDetails runner={race.runner} />
      </div>
    );
  };

  loadMoreOnClick = async event => {
    event.preventDefault();
    const { chosenRunners } = this.state;

    await this.onChange(chosenRunners);
  };

  buildLoadMoreButton = (numberOfRaces) => {
    const { endIndex } = this.state;
    let loadMore;

    if (numberOfRaces > endIndex) {
      loadMore = <React.Fragment>
                  <Button variant="contained" color="secondary" onClick={this.loadMoreOnClick}>Load More</Button>
                  <br />
                  <br />
                  <br />
                 </React.Fragment>;
    }

    return loadMore;
  }

  calculateNextEndIndex = (runnerNames) => {
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
  }

  onChange = async runnerNames => {
    if (runnerNames.length > 0) {
      this.setState({
        loadingResults: true,
      });
      const newEndIndex = this.calculateNextEndIndex(runnerNames);
      const runnersDetails = await this.searchForRunners(runnerNames, newEndIndex);
  
      this.setState({
        runner: runnersDetails,
        runnerName: runnerNames[0].display,
        loadingResults: false,
        chosenRunners: runnerNames,
        endIndex: newEndIndex,
        chosenRace: '',
      });

      setLocal({key: chosenRunnersKey, value: runnerNames});
    } else {
      this.clearClick();
    }
  };

  fetchRunnerByRace = async (runnerNames, chosenRace) => {
    if (runnerNames.length > 0) {
      this.setState({
        loadingResults: true,
      });

      const runnersDetails = await this.searchForRunnersByRace(runnerNames, chosenRace);
  
      this.setState({
        runner: runnersDetails,
        runnerName: runnerNames[0].display,
        loadingResults: false,
        chosenRunners: runnerNames,
        chosenRace: chosenRace,
      });

      setLocal({key: chosenRunnersKey, value: runnerNames});
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

  debouncedFetchRunners = _.debounce(this.fetchRunners, 350);

  getRunners = (searchValue, callback) => {
    if (!searchValue || searchValue.length < 3) {
      return callback(null, { options: [] });
    }

    this.debouncedFetchRunners(searchValue, callback);
  }

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

  populateRaceSelect = () => {
    const { raceNames } = this.state.runner;

    let raceSelectItems = [
      <MenuItem key="all" value="all">
        All
      </MenuItem>,
    ];

    raceNames.map(eachRace => {
      raceSelectItems.push(
        <MenuItem key={eachRace.original} value={eachRace.original}>
          {eachRace.display}
        </MenuItem>,
      );
    });

    const raceSelector = (
      <React.Fragment>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel htmlFor="race-select">Race</InputLabel>
          <Select
            value={this.state.chosenRace}
            onChange={this.handleChooseRaceChange}
            inputProps={{
              name: 'race',
              id: 'race-select',
            }}
          >
            {raceSelectItems}
          </Select>
        </FormControl>
      </React.Fragment>
    );

    return raceSelector;
  };

  populateOverallStats = () => {
    if (this.state.runner.overallStats) {
      return <OverallStats overallStats={this.state.runner.overallStats} />;
    }

    return null;
  }

  render() {
    // @TODO: Tidy this up getting very cluttered
    const { runner, chosenRace, loadingResults, sticky, chosenRunners, endIndex } = this.state;
    const { classes } = this.props;
    const searchClass = this.state.sticky ? classes.search : '';
    let clearButton;
    let overallStats;
    let raceResults;
    let loadingProgress;
    let scrollToTopButton;
    let racesSelect;
    let loadMoreButton;

    if (runner != null && runner.races && runner.races.length > 0) {
      // Display clear button
      clearButton = this.buildClearButton();
      overallStats = this.populateOverallStats();
      const racesForRunner = runner.races;

      // Filtering races
      if (chosenRace === '') {
        raceResults = racesForRunner.map(race => this.buildRaceResult(race));
        loadMoreButton = this.buildLoadMoreButton(runner.overallStats.noOfRaces, endIndex);
      } else {
        // Filtering by a chosen race
        let filteredRaces = [];
        const listOfChosenRaces = chosenRace.split('||');

        if (listOfChosenRaces.length > 1) {
          listOfChosenRaces.map(eachChosenRace => {
            for (let i = 0; i < runner.races.length; i++) {
              if (runner.races[i][0].name === eachChosenRace) {
                filteredRaces.push(runner.races[i][0]);
                break;
              }
            }
          });
        } else {
          if (runner.races) {
            filteredRaces = runner.races[0];
          }
        }

        raceResults = filteredRaces.map(race => this.buildRaceResult(race));
      }

      // Populating races drop down
      racesSelect = this.populateRaceSelect();
    } else if (
      runner != null &&
      runner.races.length === 0
    ) {
      raceResults = this.noResultsFound(classes.noRaces);
    }

    if (loadingResults) {
      loadingProgress = this.loadingProgress();
    }

    if (sticky) {
      scrollToTopButton = (
        <span className={classes.scrollToTopButton}>
          <Button
            variant="fab"
            color="secondary"
            onClick={this.scrollToTopClick}
          >
            <ArrowUpwardIcon />
          </Button>
        </span>
      );
    }

    return (
      <React.Fragment>
        <div className={searchClass}>
          <Async
            cacheOptions
            defaultOptions
            className={classes.searchField}
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
        {loadingProgress}
        {overallStats}
        {raceResults}
        {loadMoreButton}
        {scrollToTopButton}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Search);
