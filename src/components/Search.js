import React, { Component } from 'react';

// Material-UI
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import RaceDetails from './RaceDetails';
import RunnerDetails from './RunnerDetails';

import search from './../service/searchService';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    marginLeft: theme.spacing.unit,
  }
});

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runner: null
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({runner: search(this.searchRunner.value)});
    }

    render() {
      const { classes } = this.props;
      let raceResults;

      if (this.state.runner != null) {
        raceResults = this.state.runner.races.map((race) =>
          <div key={race.id}>
            <br />
            <RaceDetails race={race} />
            <RunnerDetails runner={race.runner} />
          </div>
        );
      }

      return (
        <div className="Search">
          {/* <input type="text" defaultValue="James Logue" id="searchRunner" ref={(input) => this.searchRunner = input} /> */}
          <TextField
              inputRef={(input) => this.searchRunner = input}
              placeholder='Find a runner...'
              defaultValue='James Logue'
              required={true}
            />
          {/* <button onClick={this.handleClick}>Search</button> */}
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
            search
            <Icon className={classes.icon}>face</Icon>
          </Button>
          {/* {runnerName} */}
          {raceResults}
        </div>
      );
    }
  }
  
  export default withStyles(styles)(Search);