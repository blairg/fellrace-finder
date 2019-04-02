import {
    RACE_DETAILS_ACTION,
} from '../actionTypes/race';

export default (state = { raceDetails: null }, action) => {
    switch (action.type) {
        case RACE_DETAILS_ACTION:
            return Object.assign({}, state, {
                raceDetails: action.payload
            });
        default:
            return state
    }
}