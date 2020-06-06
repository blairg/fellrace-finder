import { MAPS_RACES_ACTION } from "./../actionTypes/maps";

export const mapsRacesAction = (races = null) => dispatch => {
  dispatch({
    type: MAPS_RACES_ACTION,
    payload: races
  });
};
