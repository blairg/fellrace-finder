import {
    RUNNER_DETAILS_ACTION,
} from './../actionTypes/runner';

export const runnerDetailsAction = (details = null) => dispatch => {
    console.log(details);
        
    dispatch({
        type: RUNNER_DETAILS_ACTION,
        payload: details,
    });
};