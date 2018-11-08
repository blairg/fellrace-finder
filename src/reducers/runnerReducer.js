import {
    RUNNER_DETAILS_ACTION, 
} from '../actionTypes/runner';

export default (state = {}, action) => {
    switch (action.type) {
        case RUNNER_DETAILS_ACTION:
            return {
                runnerDetails: action.payload
            }
        default:
            return state
    }
}