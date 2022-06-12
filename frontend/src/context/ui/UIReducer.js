import { types } from "../../types";


export const UIReducer = ( state, action ) => {

    switch (action.type) {
        case types.uiToggleMenu:
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            }
    
        default:
            return state;
    }
}