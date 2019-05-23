import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import runnerReducer from "./runnerReducer";
import scrollReducer from "./scrollReducer";
import menuReducer from "./menuReducer";
import raceReducer from "./raceReducer";
import calendarReducer from "./calendarReducer";

export default combineReducers({
  searchReducer,
  runnerReducer,
  scrollReducer,
  menuReducer,
  raceReducer,
  calendarReducer
});
