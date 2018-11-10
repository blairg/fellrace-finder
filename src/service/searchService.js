import axios from 'axios';
import { AllHtmlEntities } from 'html-entities';

import { getSession, setSession } from './storageService';

const entities = new AllHtmlEntities();

export async function search(runnerNames, startIndex, endIndex) {
  const runnersNamedJoined = runnerNames.join('$$');
  let races = null;

  await axios
    .get(
      `${
        process.env.REACT_APP_API_SERVER
      }/runner/${runnersNamedJoined}/${startIndex}/${endIndex}`,
    )
    .then(function(response) {
      races = response.data;
      return races;
    })
    .catch(function(error) {
      console.log(error);
    });

  return races;
}

export async function searchByRace(runnerNames, raceNames) {
  const runnersNamedJoined = runnerNames.join('$$');
  let encodedRaceNames = raceNames.replace('/', '**');
  encodedRaceNames = entities.encode(encodedRaceNames);
  let races = null;

  await axios
    .get(
      `${
        process.env.REACT_APP_API_SERVER
      }/runnerByRace/${runnersNamedJoined}/${encodedRaceNames}`,
    )
    .then(function(response) {
      races = response.data;
      return races;
    })
    .catch(function(error) {
      console.log(error);
    });

  return races;
}

export function partialSearch(partialName) {
  const cacheKey = `runnersList${partialName}`;
  const runnersInSessionStorage = getSession(cacheKey);

  if (runnersInSessionStorage) {
    return {
      options: runnersInSessionStorage,
    };
  }

  const url = `${
    process.env.REACT_APP_API_SERVER
  }/autocomplete/runner/${partialName.toLowerCase()}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(json => {
      const runnersList = [];

      json.items.map(runner => {
        let found = false;

        runnersList.map(runnerAdded => {
          if (runner.display === runnerAdded.display) {
            found = true;

            return true;
          }

          return false;
        });

        if (!found) {
          runnersList.push(runner);
        }

        return found;
      });

      setSession({
        key: cacheKey,
        value: runnersList,
      });

      return {
        options: runnersList,
      };
    });
}
