import axios from 'axios';

export async function search(runnerName) {
    let races = null;

    //await axios.get(`http://localhost:5555/runner/${runnerName.toLowerCase()}`)
    await axios.get(`https://fellrace-finder-server.herokuapp.com/runner/${runnerName.toLowerCase()}`)
    .then(function (response) {
        races = response.data;
        return races;
    })
    .catch(function (error) {
        console.log(error);
    });

    return races;
};

export async function partialSearch(partialName) {
    let runners = null;

    // await axios.get(`http://localhost:5555/runner/autocomplete/${partialName.toLowerCase()}`)
    await axios.get(`https://fellrace-finder-server.herokuapp.com/runner/autocomplete/${partialName.toLowerCase()}`)
    .then(function (response) {
        runners = response.data;
        return runners;
    })
    .catch(function (error) {
        console.log(error);
    });

    return runners;
};