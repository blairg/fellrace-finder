import {
    STICKY_ACTION, 
} from '../actionTypes/scroll';

export default (state = { sticky: false }, action) => {
    switch (action.type) {
        case STICKY_ACTION:
            return Object.assign({}, state, {
                sticky: action.payload
            });
        default:
            return state
    }
}