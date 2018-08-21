import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '98%',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
});

const buildNoOfWins = (wins) => {
    if (wins > 0) {
        return <Typography><b>Wins: </b>{wins}</Typography>;
    } else {
        return null;
    }
};

const buildWinPercentage = (winPercentage) => {
    if (winPercentage !== '0%') {
        return <Typography><b>Win Percentage: </b> {winPercentage}</Typography>;
    } else {
        return null;
    }
};

const buildBestRace = (noOfWins, bestRace, bestRaceId) => {
    const raceLink = `http://www.fellrunner.org.uk/results.php?id=${bestRaceId}`;

    if (noOfWins <= 1 ) {
        return <Typography><b>Best Race: </b> <a href={raceLink} target="_blank">{bestRace}</a></Typography>;
    } 

    return null;
};

const buildHighestPlace = (highestPlace) => {
    if (highestPlace > 1) {
        return <Typography><b>Highest Place: </b> {highestPlace}</Typography>;
    } else {
        return null;
    }
};

const buildHighestPercentage = (highestPercentage) => {
    if (highestPercentage > 0) {
        return <Typography><b>Highest Percentage: </b> {highestPercentage}{'%'}</Typography>;
    } else {
        return null;
    }
};

function PerformanceStats(props) {
    const { overallStats } = props;
  
    console.log(overallStats);
  
    return (
      <React.Fragment>
        <Paper>
            <Typography><b>Races: </b> {overallStats.noOfRaces}</Typography>
            {buildNoOfWins(overallStats.noOfWins)}
            {buildWinPercentage(overallStats.raceWinPercentage)}
            <Typography><b>Average Position: </b> {overallStats.overallPosition}</Typography>
            <Typography><b>Average Percentage: </b> {overallStats.percentagePosition}{'%'}</Typography>
            {buildBestRace(overallStats.noOfWins, overallStats.bestRace, overallStats.bestRaceId)}
            {buildHighestPlace(overallStats.highestPlace)}
            {buildHighestPercentage(overallStats.highestPercentage)}
        </Paper>
      </React.Fragment>
    );
  }
  
  export default withStyles(styles)(PerformanceStats);