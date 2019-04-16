import {
    LOADING_PROGRESS_ACTION,
    CHOSEN_RUNNERS_ACTION,
    CHOSEN_RACES_ACTION,
    CHOSEN_RACE_ACTION,
    END_INDEX_ACTION,
    LOAD_MORE_PROGRESS_ACTION,
} from './../actionTypes/search';

export const loadingProgressAction = (loadingProgress = true) => dispatch => {
    dispatch({
        type: LOADING_PROGRESS_ACTION,
        payload: loadingProgress,
    });
};

export const loadingProgressRaceAction = (loadingProgress = true) => dispatch => {
    dispatch({
        type: LOADING_PROGRESS_ACTION,
        payload: loadingProgress,
    });
};

export const chosenRunnersAction = (chosenRunners = []) => dispatch => {
    dispatch({
        type: CHOSEN_RUNNERS_ACTION,
        payload: chosenRunners,
    });
};

export const chosenRacesAction = (chosenRace = []) => dispatch => {
    dispatch({
        type: CHOSEN_RACES_ACTION,
        payload: chosenRace,
    });
};

export const chosenRaceAction = (chosenRace = '') => dispatch => {
    dispatch({
        type: CHOSEN_RACE_ACTION,
        payload: chosenRace,
    });
};

export const endIndexAction = (endIndex = 0) => dispatch => {
    dispatch({
        type: END_INDEX_ACTION,
        payload: endIndex,
    });
};

export const loadMoreProgressAction = (loadMoreProgress = false) => dispatch => {
    dispatch({
        type: LOAD_MORE_PROGRESS_ACTION,
        payload: loadMoreProgress,
    });
};