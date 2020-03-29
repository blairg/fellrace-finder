import {
  MENU_ACTION,
  MENU_TOGGLE_ACTION,
  MENU_COUNT_LOGGED_IN
} from "./../actionTypes/menu";

export const menuAction = (details = null) => dispatch => {
  dispatch({
    type: MENU_ACTION,
    payload: details
  });
};

export const menuToggleAction = (details = null) => dispatch => {
  dispatch({
    type: MENU_TOGGLE_ACTION,
    payload: details
  });
};

export const menuCountLoggedInAction = (count = 0) => dispatch => {
  dispatch({
    type: MENU_COUNT_LOGGED_IN,
    payload: count
  });
};
