import {
    RACE_DETAILS_ACTION,
    USER_ORIGIN_ACTION,
} from '../actionTypes/race';

export default (state = { raceDetails: null, origin: null }, action) => {
    switch (action.type) {
        case RACE_DETAILS_ACTION:
            return Object.assign({}, state, {
                raceDetails: action.payload
            });
        case USER_ORIGIN_ACTION:
            return Object.assign({}, state, {
                origin: action.payload
            });
        default:
            return state
    }
}