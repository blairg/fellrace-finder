import {
    MENU_ACTION,
    MENU_TOGGLE_ACTION,
} from './../actionTypes/menu';

export const menuAction = (details = null) => dispatch => {
    dispatch({
        type: MENU_ACTION,
        payload: details,
    });
};

export const menuToggleAction = (details = null) => dispatch => {
    dispatch({
        type: MENU_TOGGLE_ACTION,
        payload: details,
    });
};
