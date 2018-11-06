import {
    PARTIAL_NAME_ACTION
} from './../actionTypes/search';

export const partialNameAction = () => dispatch => {
    dispatch({
        type: PARTIAL_NAME_ACTION,
        payload: 'result_of_simple_action'
    })
};