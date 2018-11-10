import {
    STICKY_ACTION,
} from './../actionTypes/scroll';

export const stickyAction = (sticky = false) => dispatch => {
    dispatch({
        type: STICKY_ACTION,
        payload: sticky,
    });
};