import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
    createLogger
} from 'redux-logger';
import {
    composeWithDevTools
} from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const loggerMiddleware = createLogger();

export default function configureStore(initialState = {}) {
    if (process.env.REACT_APP_DEV_MODE === 'false') {
        return createStore(rootReducer, 
            applyMiddleware(thunkMiddleware, // lets us dispatch() functions
            ));
    } else {
        return createStore(rootReducer, composeWithDevTools(
            applyMiddleware(thunkMiddleware, // lets us dispatch() functions
            //loggerMiddleware, // neat middleware that logs actions),
            )));
    }
};