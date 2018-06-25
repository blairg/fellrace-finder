import axios from 'axios';

import { prettyMs } from './../utils/dateTimeUtils';
//import races from "./../data/fellraces";
import { upperCaseWords } from "./../utils/stringUtils";

const calculatePercentage = ({first, second}) => {
    return Math.round(Math.floor((first / second) * 100));
}

const calculateRacePercentage = ({position, numberOfRunners}) => {
    if (parseInt(position, 10) === 1) {
        return 'Winner!';
    } else {
        let percent = calculatePercentage({first: position, second: numberOfRunners});

        if (percent === 0) { 
            percent = 1;
        }

        return `Top ${percent}%` ;
    }
};

const calculateCategoryResult = ({race, runner, runnerName}) => {
    const runnersInCategory = race.runners.filter(
        eachRunner => eachRunner.category.toLowerCase() === runner.category.toLowerCase()
    );
    const countInCategory = runnersInCategory.length;
    let position;
    let percentage;

    for(let i = 0; i < countInCategory; i++) {
        if (runnersInCategory[i].name.toLowerCase() === runnerName.toLowerCase()) {
            const positionResult = i + 1;
            position = `${positionResult} of ${countInCategory}`;
            
            if (positionResult === 1) {
                percentage = `Fastest ${runnersInCategory[i].category}`;
            } else {
                let percent = calculatePercentage({first: positionResult, second: countInCategory});

                if (percent === 0) { 
                    percent = 1;
                }

                percentage = `Top ${percent}%`;
            }
            break;
        }
    }

    const winner = {
        name: upperCaseWords(runnersInCategory[0].name.toLowerCase()),
        time: prettyMs(getNumberOfMillisecondsTaken(runnersInCategory[0].time)),
    };

    return {position, percentage, winner};
};

const calculateClubResult = ({race, runner, runnerName}) => {
    const runnersInClub = race.runners.filter(
        eachRunner => eachRunner.club.toLowerCase() === runner.club.toLowerCase()
    );
    const countInClub = runnersInClub.length;
    let position;
    let percentage = '';

    for(let i = 0; i < countInClub; i++) {
        if (runnersInClub[i].name.toLowerCase() === runnerName.toLowerCase()) {
            const positionResult = i + 1;
            position = `${positionResult} of ${countInClub}`;
            
            if (positionResult > 1) {
                percentage = `Top ${calculatePercentage({first: positionResult, second: countInClub})}%`;
            } 
            break;
        }
    }

    const winner = {
        name: upperCaseWords(runnersInClub[0].name.toLowerCase()),
        time: prettyMs(getNumberOfMillisecondsTaken(runnersInClub[0].time)),
    };

    return {position, percentage, winner};
};

const getNumberOfMillisecondsTaken = (raceDuration) => {
    let minutesTaken = 0;
    let secondsTaken = 0;

    if (raceDuration.substring(0, 2) > 0) {
        minutesTaken = raceDuration.substring(0, 2) * 60;
    }

    if (raceDuration.substring(3, 5) > 0) {
        minutesTaken = minutesTaken + parseInt(raceDuration.substring(3, 5), 10);
    }

    secondsTaken = minutesTaken * 60;

    if (raceDuration.substring(6, 8) > 0) {
        secondsTaken = secondsTaken + parseInt(raceDuration.substring(6, 8), 10);
    }

    return secondsTaken * 1000;
};

const calculateTimeDifference = ({runnersInRace, runnerTime}) => {
    const firstRunnerTime = runnersInRace[0].time;
    const runnerToCheckNumberOfSeconds = getNumberOfMillisecondsTaken(runnerTime);
    const firstPlaceNumberOfSeconds = getNumberOfMillisecondsTaken(firstRunnerTime);
    const timeFromFirst = prettyMs(runnerToCheckNumberOfSeconds - firstPlaceNumberOfSeconds);

    return (timeFromFirst === '0ms') ? "" : timeFromFirst;
};

const getRaces = async (runner, callback) => {
    let races = null;

    await axios.get(`http://localhost:5555/runner/${runner}`)
    .then(function (response) {
        //console.log(response);
        callback(response.data);
        races = response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

    return races;
}

// const search = async (runnerName) => {
//     const filteredRaces = {
//         runner: "",
//         races: []
//     };

//     if (!runnerName) {
//         return filteredRaces;
//     }

//     let races = [];

//     const callback = async (data) => {
//         //console.log(data);
//         races = data;
//     }

//     await getRaces(runnerName, callback);
//     console.log('---------------------');
//     console.log(races);

//     races.forEach(race => {
//         const runners = race.runners.filter(runner => runner.name.toLowerCase() === runnerName.toLowerCase());

//         if (runners.length > 0) {
//             const categoryResult = calculateCategoryResult({race, runner: runners[0], runnerName});
//             const clubResult = calculateClubResult({race, runner: runners[0], runnerName});
//             const timeDifferenceFromFirst = calculateTimeDifference({runnersInRace: race.runners, runnerTime: runners[0].time});

//             filteredRaces.races.push({
//                 id: race.id,
//                 name: race.race, 
//                 date: race.date, 
//                 //resultsUrl: `javascript:window.open('http://www.fellrunner.org.uk/results.php?id=${race.id}', '_blank')`,
//                 resultsUrl: ``,
//                 runner: {
//                     position: `${runners[0].position} of ${race.numberofrunners}`,
//                     racePercentagePosition: calculateRacePercentage(
//                         {position: runners[0].position, numberOfRunners: race.numberofrunners}
//                     ),
//                     category: runners[0].category,
//                     categoryPosition: categoryResult.position,
//                     categoryPercentage: categoryResult.percentage,
//                     categoryWinner: categoryResult.winner,
//                     club: runners[0].club,
//                     clubPosition: clubResult.position,
//                     clubPercentage: clubResult.percentage,
//                     clubWinner: clubResult.winner,
//                     time: prettyMs(getNumberOfMillisecondsTaken(runners[0].time)),
//                     winner: {
//                         name: upperCaseWords(race.runners[0].name.toLowerCase()),
//                         time: prettyMs(getNumberOfMillisecondsTaken(race.runners[0].time)),
//                     },
//                     timeFromFirst: timeDifferenceFromFirst,
//                 }
//             });
//         }
//     }); 

//     if (filteredRaces) {
//         filteredRaces.runner = upperCaseWords(runnerName.toLowerCase());
//     }

//     return filteredRaces;
// };


const search = async (runnerName) => {
    let races = null;

    await axios.get(`http://localhost:5555/runner/${runnerName}`)
    .then(function (response) {
        //console.log(response);
        //callback(response.data);
        races = response.data;
        return races;
    })
    .catch(function (error) {
        console.log(error);
    });

    return races;
};


export default search;