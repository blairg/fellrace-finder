import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Async } from 'react-select';
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

import { search, partialSearch } from './../service/searchService';
import {
  getSession,
  setSession,
  removeSession,
  getLocal,
  setLocal,
  removeLocal,
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
    // marginLeft: '27%',
    // marginRight: '27%',
    // width: '46%',
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

class Search extends Component {
  constructor(props) {
    super(props);

    this.searchRunnerRef = React.createRef();

    const nameSet = getLocal('chosenRunner');
    let chosenName = '';

    if (nameSet) {
      chosenName = nameSet;
    }

    this.state = {
      runnerName: '',
      runner: null,
      races: null,
      sticky: false,
      loadingResults: false,
      value: chosenName,
      chosenRace: '',
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll, false);
    this.performSearch(this.state.value.display);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll, false);
  };

  buildClearButton = () => {
    const clearButton = (
      <MuiThemeProvider theme={clearButtonTheme}>
        <Button
          variant="fab"
          color="primary"
          className={this.props.classes.clearButton}
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
      this.setState({ runner: null, loadingResults: true, chosenRace: '' });
      const cacheKey = `getRunner${runnerName}`.replace(' ', '');
      const formattedName = runnerName;
      const runnerInStorage = getSession(cacheKey);
      let result;

      if (!runnerInStorage) {
        result = await search(runnerName);
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
      value: '',
      chosenRace: '',
    });
    removeLocal('chosenRunner');
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
    return (
      <div key={race.id}>
        <br />
        <RaceDetails race={race} />
        <RunnerDetails runner={race.runner} />
      </div>
    );
  };

  onChange = async value => {
    if (value) {
      const searchValue = value.display;

      if (searchValue !== '') {
        setLocal({key: 'chosenRunner', value: value});

        this.setState({
          value: value,
        });

        if (upperCaseWords(searchValue) !== this.state.runnerName) {
          await this.performSearch(searchValue);
        }
      } else {
        this.clearClick();
      }
    }
  };

  getRunners = searchValue => {
    console.log('searching - ', searchValue);

    if (!searchValue) {
      return Promise.resolve({ options: [] });
    }

    if (searchValue.length > 2) {
      return Promise.resolve(partialSearch(searchValue));
    } else {
      return Promise.resolve({ options: [] });
    }
  };

  handleChooseRaceChange = event => {
    const chosenRace = event.target.value;

    if (chosenRace === 'all') {
      this.setState({ chosenRace: '' });
    } else {
      this.setState({ chosenRace: chosenRace });
    }

    this.scrollToTop();
  };

  // @TODO: Break me down please...
  populateRaceSelect = () => {
    let uniqueRaceList = [];

    this.state.runner.races.map(race => {
      if (!uniqueRaceList.includes(race.name)) {
        uniqueRaceList.push(race.name);
      }
    });

    uniqueRaceList = uniqueRaceList.sort();
    let filteredUniqueRaceList = [];

    uniqueRaceList.map(race => {
      const splitRaceName = race.split('-');

      if (splitRaceName.length > 1) {
        const raceItem = {
          display: splitRaceName[0].trim(),
          original: race,
        };

        if (
          filteredUniqueRaceList.filter(e => e.display === raceItem.display)
            .length === 0
        ) {
          filteredUniqueRaceList.push(raceItem);
        } else {
          for (let i = 0; i < filteredUniqueRaceList.length; i++) {
            if (filteredUniqueRaceList[i].display === raceItem.display) {
              filteredUniqueRaceList[i].original += `||${race}`;
              break;
            }
          }
        }
      } else {
        if (
          filteredUniqueRaceList.filter(e => e.display === race).length === 0
        ) {
          filteredUniqueRaceList.push({
            display: race,
            original: race,
          });
        }
      }
    });

    let raceSelectItems = [
      <MenuItem key="all" value="all">
        All
      </MenuItem>,
    ];

    filteredUniqueRaceList.map(race => {
      raceSelectItems.push(
        <MenuItem key={race.original} value={race.original}>
          {race.display}
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

  render() {
    // @TODO: Tidy this up getting very cluttered
    const { classes } = this.props;
    const searchClass = this.state.sticky ? classes.search : '';
    let clearButton;
    let raceResults;
    let loadingProgress;
    let scrollToTopButton;
    let racesSelect;

    if (this.state.runner != null && this.state.runner.races.length > 0) {
      // Display clear button
      clearButton = this.buildClearButton();

      const racesForRunner = this.state.runner.races;

      // Filtering races
      if (this.state.chosenRace === '') {
        raceResults = racesForRunner.map(race => this.buildRaceResult(race));
      } else {
        // Filtering by a chosen race
        let filteredRaces = [];
        const listOfChosenRaces = this.state.chosenRace.split('||');

        if (listOfChosenRaces.length > 1) {
          listOfChosenRaces.map(chosenRace => {
            for (let i = 0; i < racesForRunner.length; i++) {
              if (racesForRunner[i].name === chosenRace) {
                filteredRaces.push(racesForRunner[i]);
                break;
              }
            }
          });
        } else {
          filteredRaces = this.state.runner.races.filter(
            race => race.name === this.state.chosenRace,
          );
        }

        raceResults = filteredRaces.map(race => this.buildRaceResult(race));
      }

      // Populating races drop down
      racesSelect = this.populateRaceSelect();
    } else if (
      this.state.runner != null &&
      this.state.runner.races.length === 0
    ) {
      raceResults = this.noResultsFound(classes.noRaces);
    }

    if (this.state.loadingResults) {
      loadingProgress = this.loadingProgress();
    }

    if (this.state.sticky) {
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
            className={classes.searchField}
            valueKey="original"
            labelKey="display"
            matchProp="any"
            name="runner-search-field"
            onChange={this.onChange}
            loadOptions={this.getRunners}
            placeholder="Search Runner"
            noResultsText="No runners found"
            value={this.state.value}
            multi={false}
          />
          {racesSelect}
          {clearButton}
        </div>
        {loadingProgress}
        {raceResults}
        {scrollToTopButton}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Search);
