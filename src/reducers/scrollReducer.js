import {
    STICKY_ACTION, 
} from '../actionTypes/scroll';

export default (state = {}, action) => {
    switch (action.type) {
        case STICKY_ACTION:
            return {
                sticky: action.payload
            }
        default:
            return state
    }
}