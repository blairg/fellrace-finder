import prettyMs from 'pretty-ms';
import races from "./../data/fellraces";
import { upperCaseWords } from "./../utils/stringUtils";

const calculatePercentage = ({first, second}) => {
    return Math.round(Math.floor((first / second) * 100));
}

const calculateRacePercentage = ({position, numberOfRunners}) => {
    if (parseInt(position, 10) === 1) {
        return 'Winner!';
    } else {
        return `Top ${calculatePercentage({first: position, second: numberOfRunners})}%` ;
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
                percentage = `Top ${calculatePercentage({first: positionResult, second: countInCategory})}%`;
            }
            break;
        }
    }

    return {position, percentage};
};

const calculateClubResult = ({race, runner, runnerName}) => {
    const runnersInClub = race.runners.filter(
        eachRunner => eachRunner.club.toLowerCase() === runner.club.toLowerCase()
    );
    const countInClub = runnersInClub.length;
    let position;
    let percentage;

    for(let i = 0; i < countInClub; i++) {
        if (runnersInClub[i].name.toLowerCase() === runnerName.toLowerCase()) {
            const positionResult = i + 1;
            position = `${positionResult} of ${countInClub}`;
            
            if (positionResult === 1) {
                percentage = `Fastest ${runnersInClub[i].club} runner`;
            } else {
                percentage = `Top ${calculatePercentage({first: positionResult, second: countInClub})}%`;
            }
            break;
        }
    }

    return {position, percentage};
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
    let lastRunnerTime;

    for (let i = runnersInRace.length - 1; i > 0; i--) {
        if (runnersInRace[i].time.indexOf(':') > -1) {
            lastRunnerTime = runnersInRace[i].time;
            break;
        }
    }

    const runnerToCheckNumberOfSeconds = getNumberOfMillisecondsTaken(runnerTime);
    const firstPlaceNumberOfSeconds = getNumberOfMillisecondsTaken(firstRunnerTime);
    const lastPlaceNumberOfSeconds = getNumberOfMillisecondsTaken(lastRunnerTime);
    const differenceFromFirst = prettyMs(runnerToCheckNumberOfSeconds - firstPlaceNumberOfSeconds);
    const differenceFromLast = prettyMs(lastPlaceNumberOfSeconds - firstPlaceNumberOfSeconds);

    return {differenceFromFirst, differenceFromLast};
};

const search = (runnerName) => {
    const filteredRaces = {
        runner: "",
        races: []
    };

    if (!runnerName) {
        return filteredRaces;
    }

    races.forEach(race => {
        const runners = race.runners.filter(runner => runner.name.toLowerCase() === runnerName.toLowerCase());

        if (runners.length > 0) {
            const categoryResult = calculateCategoryResult({race, runner: runners[0], runnerName});
            const clubResult = calculateClubResult({race, runner: runners[0], runnerName});
            const timeDifference = calculateTimeDifference({runnersInRace: race.runners, runnerTime: runners[0].time});

            filteredRaces.races.push({
                id: race.id,
                name: race.race, 
                date: race.date, 
                runner: {
                    position: `${runners[0].position} of ${race.numberofrunners}`,
                    racePercentagePosition: calculateRacePercentage(
                        {position: runners[0].position, numberOfRunners: race.numberofrunners}
                    ),
                    category: runners[0].category,
                    categoryPosition: categoryResult.position,
                    categoryPercentage: categoryResult.percentage,
                    club: runners[0].club,
                    clubPosition: clubResult.position,
                    clubPercentage: clubResult.percentage,
                    time: prettyMs(getNumberOfMillisecondsTaken(runners[0].time)),
                    timeFromFirst: timeDifference.differenceFromFirst,
                    timeFromLast: timeDifference.differenceFromLast,
                }
            });
        }
    }); 

    if (filteredRaces) {
        filteredRaces.runner = upperCaseWords(runnerName.toLowerCase());
    }

    //console.log(filteredRaces);

    return filteredRaces;
};


export default search;