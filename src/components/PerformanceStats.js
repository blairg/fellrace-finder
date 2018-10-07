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

const buildDistance = (kilometersRaced, milesRaced) => {
    if (kilometersRaced > 0) {
        return <Typography><b>Distance: </b> {parseFloat(kilometersRaced).toLocaleString()}km - {parseFloat(milesRaced).toLocaleString()}miles</Typography>;
    } else {
        return null;
    }
};

const buildClimbed = (metersClimbed, feetClimbed) => {
    if (metersClimbed > 0) {
        return <Typography><b>Climbed: </b> {parseInt(metersClimbed, 10).toLocaleString()}m - {parseInt(feetClimbed, 10).toLocaleString()}feet</Typography>;
    } else {
        return null;
    }
};

const buildShortestRace = (shortestRace) => {
    if (shortestRace && shortestRace.name) {
        return <Typography><b>Shortest Race: </b> {shortestRace.name} - {shortestRace.kilometers}km - {shortestRace.miles}miles</Typography>;
    } else {
        return null;
    }
};

const buildLongestRace = (longestRace) => {
    if (longestRace && longestRace.name) {
        return <Typography><b>Longest Race: </b> {longestRace.name} - {longestRace.kilometers}km - {longestRace.miles}miles</Typography>;
    } else {
        return null;
    }
};

const buildAverageRace = (averageRace) => {
    if (averageRace && averageRace.kilometers) {
        return <Typography><b>Average Race Distance: </b> {averageRace.kilometers}km - {averageRace.miles}miles</Typography>;
    } else {
        return null;
    }
};

function PerformanceStats(props) {
    const { overallStats } = props;
  
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
            {buildDistance(overallStats.kilometersRaced, overallStats.milesRaced)}
            {buildClimbed(overallStats.metersClimbed, overallStats.feetClimbed)}
            {buildShortestRace(overallStats.shortestRace)}
            {buildLongestRace(overallStats.longestRace)}
            {buildAverageRace(overallStats.averageRace)}
        </Paper>
      </React.Fragment>
    );
  }
  
  export default withStyles(styles)(PerformanceStats);