import {
    LOADING_PROGRESS_ACTION,
    LOADING_PROGRESS_RACE_ACTION,
    CHOSEN_RUNNERS_ACTION,
    CHOSEN_RACES_ACTION,
    CHOSEN_RACE_ACTION,
    END_INDEX_ACTION,
    LOAD_MORE_PROGRESS_ACTION,
} from '../actionTypes/search';

export default (state = { loadingProgress: false, chosenRunners: [], chosenRace: '', endIndex: 0, loadMoreLoading: false }, action) => {
        switch (action.type) {
            case LOADING_PROGRESS_ACTION:
                return Object.assign({}, state, {
                    loadingProgress: action.payload
                });
            case LOADING_PROGRESS_RACE_ACTION:
                return Object.assign({}, state, {
                    loadingRaceProgress: action.payload
                });
            case CHOSEN_RUNNERS_ACTION:
                return Object.assign({}, state, {
                    chosenRunners: action.payload
                });
            case CHOSEN_RACES_ACTION:
                return Object.assign({}, state, {
                    chosenRaces: action.payload
                });
            case CHOSEN_RACE_ACTION:
                return Object.assign({}, state, {
                    chosenRace: action.payload
                });
            case END_INDEX_ACTION:
                return Object.assign({}, state, {
                    endIndex: action.payload
                });
            case LOAD_MORE_PROGRESS_ACTION:
                return Object.assign({}, state, {
                    loadMoreLoading: action.payload
                });
            default:
                return state
        }
    }