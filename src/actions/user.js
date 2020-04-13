import { USER_LOGGED_IN } from "./../actionTypes/user";

export const loginAction = (userDetails = null) => dispatch => {
  dispatch({
    type: USER_LOGGED_IN,
    payload: userDetails
  });
};
