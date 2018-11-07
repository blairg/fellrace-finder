import {
    PARTIAL_NAME_ACTION,
    LOADING_PROGRESS_ACTION,
} from './../actionTypes/search';

export const partialNameAction = () => dispatch => {
    dispatch({
        type: PARTIAL_NAME_ACTION,
        payload: 'result_of_simple_action',
    });
};

export const loadingProgressAction = (loadingProgress) => dispatch => {
    dispatch({
        type: LOADING_PROGRESS_ACTION,
        payload: loadingProgress,
    });
};