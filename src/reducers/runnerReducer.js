import {
    RUNNER_DETAILS_ACTION,
} from '../actionTypes/runner';

export default (state = { runnerDetails: null }, action) => {
    switch (action.type) {
        case RUNNER_DETAILS_ACTION:
            return Object.assign({}, state, {
                runnerDetails: action.payload
            });
        default:
            return state
    }
}