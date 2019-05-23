import { CALENDAR_EVENTS_ACTION } from "../actionTypes/calendar.js";

export const eventsAction = (events = null) => dispatch => {
  dispatch({
    type: CALENDAR_EVENTS_ACTION,
    payload: events
  });
};
