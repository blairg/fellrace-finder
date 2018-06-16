import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

// Material-UI
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import RaceDetails from './RaceDetails';
import RunnerDetails from './RunnerDetails';

import search from './../service/searchService';
import { upperCaseWords } from "./../utils/stringUtils";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    marginLeft: theme.spacing.unit,
  },
  search: {
    position: 'sticky',
    top: '0px',
    backgroundColor: 'white',
  },
  noRaces: { 
    marginRight: '10px',
    marginLeft: '10px',
    marginTop: '5px',
    marginBottom: '5px',
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

        if (upperCaseWords(this.searchRunner.value) !== this.state.runnerName) {
          this.setState({runner: null});
          this.setState({loadingResults: true});

          setTimeout(function() 
          { 
            const runnerName = this.searchRunner.value;
            const result = search(runnerName);

            this.setState({runner: result});
            this.setState({runnerName: upperCaseWords(runnerName)});
            this.setState({loadingResults: false});
          }.bind(this), 1500);

          if (this.state.sticky) {
            scroll.scrollToTop();
          }
        }
    }

    render() {
      const { classes } = this.props;
      const searchClass = this.state.sticky ? classes.search : "";
      let raceResults;
      let loadingProgress;

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

      return (
        <div>
          <div className={searchClass}>
            <TextField
              inputRef={(input) => this.searchRunner = input}
              placeholder='Find a runner...'
              defaultValue='Tom Brunt'
              required={true}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.handleClick(event)
                }
              }}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
              search
              <Icon className={classes.icon}>face</Icon>
            </Button>
          </div>
          {loadingProgress}
          {raceResults}
        </div>
      );
    }
  }
  
  export default withStyles(styles)(Search);