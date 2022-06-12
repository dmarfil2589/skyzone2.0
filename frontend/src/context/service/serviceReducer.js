import { types } from "../../types";

export const serviceReducer = ( state, action ) => {

    switch (action.type) {
        case types.servicesSearch:
            return {
                ...state,
                servicesSearched: action.payload
            };

        case types.businessMoreSearch:
            return {
                ...state,
                servicesMoreSearch: [ ...action.payload ]
            };
           
        default:
            return state;
    }
}