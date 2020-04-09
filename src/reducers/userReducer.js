import { USER_LOGGED_IN } from "../actionTypes/user";

export default (state = { userDetails: null }, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return Object.assign({}, state, {
        userDetails: action.payload
      });
    default:
      return state;
  }
};
