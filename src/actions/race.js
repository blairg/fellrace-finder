import {
    RACE_DETAILS_ACTION,
} from './../actionTypes/race';

export const raceDetailsAction = (details = null) => dispatch => {
    dispatch({
        type: RACE_DETAILS_ACTION,
        payload: details,
    });
};