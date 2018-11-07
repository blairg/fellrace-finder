import {
    PARTIAL_NAME_ACTION, 
    LOADING_PROGRESS_ACTION,
} from '../actionTypes/search';

export default (state = {}, action) => {
    switch (action.type) {
        case PARTIAL_NAME_ACTION:
            return {
                result: action.payload
            }
        case LOADING_PROGRESS_ACTION:
            return {
                result: action.payload
            }
        default:
            return state
    }
}