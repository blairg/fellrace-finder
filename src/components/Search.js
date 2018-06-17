import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

// Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import SearchIcon from '@material-ui/icons/Search';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import RaceDetails from './RaceDetails';
import RunnerDetails from './RunnerDetails';

import search from './../service/searchService';
import { upperCaseWords } from "./../utils/stringUtils";

const styles = theme => ({
  searchField: {
    marginLeft: '5px',
    marginRight: theme.spacing.unit,
    minWidth: '40px'
  },
  searchButton: {
    margin: theme.spacing.unit,
  },
  clearButton: {
    marginRight: '4px',
    marginLeft: theme.spacing.unit,
  },
  scrollToTopButton: {
    margin: theme.spacing.unit,
    position: 'sticky',
    bottom: '30px',
    left: '95%',
  },
  search: {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'white',
    marginLeft: '27%',
    marginRight: '27%',
    width: '46%',
  },
  search: {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'white',
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
            runnerName: "",
            runner: null,
            sticky: false,
            loadingResults: false,
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

    handleClick = (e) => {
        e.preventDefault();
        const searchValue = this.searchRunnerRef.value.trim();

        if (searchValue !== '') {
          if (upperCaseWords(searchValue) !== this.state.runnerName) {
            this.setState({runner: null});
            this.setState({loadingResults: true});

            setTimeout(function() 
            { 
              const runnerName = searchValue;
              const result = search(runnerName);

              this.setState({runner: result});
              this.setState({runnerName: upperCaseWords(runnerName)});
              this.setState({loadingResults: false});
              scroll.scrollTo(170);
            }.bind(this), 1500);
          }
        } else {
          this.clearClick(e);
        }
    }

    clearClick = (e) => {
      e.preventDefault();

      scroll.scrollToTop();

      setTimeout(function() 
      { 
        this.searchRunnerRef.value = '';
        this.setState({sticky: false});
        this.setState({runner: null});
        this.setState({runnerName: null});
        this.setState({loadingResults: false});
      }.bind(this), 1000);
    }

    scrollToTopClick = (e) => {
      e.preventDefault();

      scroll.scrollToTop();
    }

    render() {
      // @TODO: Tidy this up getting very cluttered
      const { classes } = this.props;
      const searchClass = this.state.sticky ? classes.search : "";
      let raceResults;
      let loadingProgress;
      let scrollToTopButton;

      if (this.state.runner != null && this.state.runner.races.length > 0) {
        raceResults = this.state.runner.races.map((race) =>
          <div key={race.id}>
            <br />
            <RaceDetails race={race} />
            <RunnerDetails runner={race.runner} />
          </div>
        );
      } else if (this.state.runner != null && this.state.runner.races.length === 0) {
        raceResults = <Paper className={classes.noRaces}>
          <Typography variant="subheading">
            No race results found for this runner!
          </Typography>
        </Paper>;
      }

      if (this.state.loadingResults) {
        loadingProgress = 
          <span>
            <br />
            <LinearProgress />
            <br />
            <LinearProgress color="secondary" variant="query" />
            <br />
            <LinearProgress />
          </span>;
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
        <div>
          <div className={searchClass}>
            <TextField
              label="Search Runner"
              type="search"
              className={classes.searchField}
              inputRef={(input) => this.searchRunnerRef = input}
              placeholder='Runners name...'
              defaultValue='Tom Brunt'
              required={true}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.handleClick(event)
                }
              }}
            />
            <Button variant="fab" color="secondary" className={classes.searchButton} onClick={this.handleClick}>
              <SearchIcon />
            </Button>
            <MuiThemeProvider theme={clearButtonTheme}>
              <Button variant="fab" color="primary" className={classes.clearButton} onClick={this.clearClick}>
                <ClearAllIcon />
              </Button>
            </MuiThemeProvider>
          </div>
            {loadingProgress}
            {raceResults}
            {scrollToTopButton}
        </div>
      );
    }
  }
  
  export default withStyles(styles)(Search);