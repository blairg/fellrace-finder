import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import runnerReducer from './runnerReducer';
import scrollReducer from './scrollReducer';

export default combineReducers({
    searchReducer,
    runnerReducer,
    scrollReducer,
});