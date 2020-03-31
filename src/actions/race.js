import {
  RACE_DETAILS_ACTION,
  USER_ORIGIN_ACTION,
  ALL_RACES_ACTION
} from "./../actionTypes/race";

export const raceDetailsAction = (details = null) => dispatch => {
  dispatch({
    type: RACE_DETAILS_ACTION,
    payload: details
  });
};

export const userOriginAction = (origin = null) => dispatch => {
  dispatch({
    type: USER_ORIGIN_ACTION,
    payload: origin
  });
};

export const allRacesAction = (races = []) => dispatch => {
  dispatch({
    type: ALL_RACES_ACTION,
    payload: races
  });
};
