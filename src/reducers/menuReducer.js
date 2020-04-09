import {
  MENU_ACTION,
  MENU_TOGGLE_ACTION,
  MENU_COUNT_LOGGED_IN
} from "../actionTypes/menu";

export default (
  state = {
    runner: false,
    race: false,
    allRaces: false,
    calendar: true,
    login: false,
    menuOpen: false,
    count: 0
  },
  action
) => {
  switch (action.type) {
    case MENU_ACTION:
      return Object.assign({}, state, {
        runner: action.payload.runner,
        race: action.payload.race,
        allRaces: action.payload.allRaces,
        login: action.payload.login,
        calendar: action.payload.calendar
      });
    case MENU_TOGGLE_ACTION:
      return Object.assign({}, state, {
        menuOpen: action.payload
      });
    case MENU_COUNT_LOGGED_IN:
      return Object.assign({}, state, {
        count: action.payload
      });
    default:
      return state;
  }
};
