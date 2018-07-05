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
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import RaceDetails from './RaceDetails';
import RunnerDetails from './RunnerDetails';

import { search, partialSearch } from './../service/searchService';
import { 
  get as getFromStorage, 
  set as setInStorage, 
  remove as removeFromStorage
} from './../service/storageService';
import { upperCaseWords } from "./../utils/stringUtils";

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
  }
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

        this.state = {
            runnerName: '',
            runner: null,
            sticky: false,
            loadingResults: false,
            value: '',
        };
    }

    componentDidMount = () => {
        window.addEventListener("scroll", this.onScroll, false);
    };

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.onScroll, false);
    };

    onScroll = () => {
        if (window.scrollY >= 165 && !this.state.sticky) {
            this.setState({sticky: true});
        } else if (window.scrollY < 165 && this.state.sticky) {
            this.setState({sticky: false});
        }
    };

    performSearch = async (runnerName) => {
      if (runnerName) {
        this.setState({runner: null, loadingResults: true});
        const stored = getFromStorage(runnerName);
        let result;

        if (!stored) {
          result = await search(runnerName);
          setInStorage(runnerName, JSON.stringify(result));
        } else {
          result = JSON.parse(stored);
          removeFromStorage(runnerName);
        }

        this.setState({
          runner: result, 
          runnerName: upperCaseWords(runnerName), 
          loadingResults: false,
        });
        scroll.scrollTo(170);
      }
    };

    handleClick = async (event) => {
      event.preventDefault();
      const searchValue = this.searchRunnerRef.value.trim();

      if (searchValue !== '') {
        if (upperCaseWords(searchValue) !== this.state.runnerName) {
          await this.performSearch(searchValue);
        }
      } else {
        this.clearClick();
      }
    }

    clearClick = () => {
      this.setState({sticky: false, runner: null, runnerName: null, loadingResults: false, value: ''});
      scroll.scrollToTop();
    }

    scrollToTopClick = (e) => {
      e.preventDefault();
      scroll.scrollToTop();
    }

    // @TODO: Move out of function scope to a service
    loadingProgress = () => {
      return <span>
        <br />
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" variant="query" />
        <br />
        <LinearProgress />
      </span>;
    }

    noResultsFound = (cssClass) => {
      return <Paper className={cssClass}>
              <Typography variant="subheading">
                No race results found for this runner!
              </Typography>
            </Paper>;
    }

    buildRaceResult = (race) => {
      return <div key={race.id}>
              <br />
              <RaceDetails race={race} />
              <RunnerDetails runner={race.runner} />
            </div>
    }

    handleSearchChange = async (event) => {
      event.preventDefault();
      const searchValue = this.searchRunnerRef.value.trim();

      if (searchValue.length > 2) {
        this.setState({runner: null, loadingResults: true});

        const cacheKey = `suggestion${searchValue}`;
        const stored = getFromStorage(cacheKey);
        let result;

        if (!stored) {
          result = await partialSearch(searchValue);
          setInStorage(cacheKey, JSON.stringify(result));
        } else {
          result = JSON.parse(stored);
        }

        this.setState({
          loadingResults: false,
          suggestions: result,
        });
      } 
      else {
        this.setState({
          suggestions: []
        });
      }
    };

    handleSuggestionSelectionChange = async (suggestion) => {
      if (suggestion) {
        const runnerName = suggestion.value;
        this.searchRunnerRef.value = runnerName;
        this.setState({suggestions: []});

        await this.performSearch(runnerName);
      }
    };

    onChange = async (value) => {
      if (value) {
        const searchValue = value.display;

        if (searchValue !== '') {
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

    getRunners = (searchValue) => {
      if (!searchValue) {
        return Promise.resolve({ options: [] });
      }

      // @TODO: Move out logic to separate file
      if (searchValue.length > 2) {
        //return fetch(`http://localhost:5555/autocomplete/runner/${searchValue}`)
        return fetch(`https://fellrace-finder-server.herokuapp.com/autocomplete/runner/${searchValue}`)
          .then((response) => response.json())
          .then((json) => {
            const runnersList = [];

            json.items.map((runner) => {
              let found = false;

              runnersList.map((runnerAdded) => {
                if (runner.display === runnerAdded.display) {
                  found = true;
                }
              });

              if (!found) {
                runnersList.push(runner);
              }
            });

            return { options: runnersList };
          });
      } else {
        return Promise.resolve({ options: [] });
      }
    };

    render() {
      // @TODO: Tidy this up getting very cluttered
      const { classes } = this.props;
      const searchClass = this.state.sticky ? classes.search : "";
      let raceResults;
      let loadingProgress;
      let scrollToTopButton;

      if (this.state.runner != null && this.state.runner.races.length > 0) {
        raceResults = this.state.runner.races.map((race) =>
          this.buildRaceResult(race)
        );
      } else if (this.state.runner != null && this.state.runner.races.length === 0) {
        raceResults = this.noResultsFound(classes.noRaces);
      }

      if (this.state.loadingResults) {
        loadingProgress = this.loadingProgress();
      }

      if (this.state.sticky) {
        scrollToTopButton = 
          <span className={classes.scrollToTopButton}>
            <Button variant="fab" color="secondary" onClick={this.scrollToTopClick}>
              <ArrowUpwardIcon />
            </Button>
          </span>;
      }

      return (
        <React.Fragment>
          <div className={searchClass}>
            <Async
              className={classes.searchField}
              valueKey="original" 
              labelKey="display"
              matchProp="any"
              name='runner-search-field'
              onChange={this.onChange}
              loadOptions={this.getRunners}
              placeholder='Search Runner'
              noResultsText='No runners found'
              value={this.state.value}
              multi={false}
            />
            <MuiThemeProvider theme={clearButtonTheme}>
              <Button variant="fab" color="primary" className={classes.clearButton} onClick={this.clearClick}>
                <ClearAllIcon />
              </Button>
            </MuiThemeProvider>
          </div>
            {loadingProgress}
            {raceResults}
            {scrollToTopButton}
        </React.Fragment>
      );
    }
  }
  
  export default withStyles(styles)(Search);