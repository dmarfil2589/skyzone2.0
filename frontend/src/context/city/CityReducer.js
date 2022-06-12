import { types } from "../../types";


export const CityReducer = ( state, action ) => {

    switch (action.type) {
        case types.cityLoad:
            return {
                ...state,
                cities: [ ...action.payload ],
                isLoaded: true,
            }
    
        default:
            return state;
    }
}