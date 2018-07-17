import axios from 'axios';

export async function search(runnerName) {
    let races = null;

    await axios.get(`${process.env.REACT_APP_API_SERVER}/runner/${runnerName.toLowerCase()}`)
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

    await axios.get(`${process.env.REACT_APP_API_SERVER}/autocomplete/runner/${partialName.toLowerCase()}`)
    .then(function (response) {
        runners = response.data;
        return runners;
    })
    .catch(function (error) {
        console.log(error);
    });

    return runners;
};