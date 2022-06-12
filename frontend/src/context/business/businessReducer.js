import { types } from "../../types";

export const businessReducer = ( state, action ) => {

    switch (action.type) {
        case types.businessSearch:
            return {
                ...state,
                isLoadBusiness: true,
                businessSearched: action.payload
            };

        case types.businessMoreSearch:
            return {
                ...state,
                businessSearched: [ ...action.payload ]
            };
           
        default:
            return state;
    }
}