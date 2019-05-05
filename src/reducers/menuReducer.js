import {
    MENU_ACTION, 
    MENU_TOGGLE_ACTION,
} from '../actionTypes/menu';

export default (state = { runner: false, race: false, menuOpen: false }, action) => {
    switch (action.type) {
        case MENU_ACTION:
            return Object.assign({}, state, {
                runner: action.payload.runner,
                race: action.payload.race,
            });
        case MENU_TOGGLE_ACTION:
            return Object.assign({}, state, {
                menuOpen: action.payload,
            });
        default:
            return state
    }
}