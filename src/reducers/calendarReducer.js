import { CALENDAR_EVENTS_ACTION } from "../actionTypes/calendar";

export default (state = { events: null }, action) => {
  switch (action.type) {
    case CALENDAR_EVENTS_ACTION:
      return Object.assign({}, state, {
        events: action.payload
      });
    default:
      return state;
  }
};
