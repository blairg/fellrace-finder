import { MAPS_RACES_ACTION } from "../actionTypes/maps";

export default (state = { races: null }, action) => {
  switch (action.type) {
    case MAPS_RACES_ACTION:
      return Object.assign({}, state, {
        races: action.payload
      });
    default:
      return state;
  }
};
