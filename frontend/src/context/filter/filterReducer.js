import { types } from "../../types";


export const filterReducer = ( state, action ) => {

    switch (action.type) {
        case types.filterUpdateOrigin:
            return {
                ...state,
                origin: action.payload
            };

        case types.filterUpdateDestiny:
            return {
                ...state,
                destiny: [ ...action.payload ]
            };

        case types.filterUpdateTravelDay:
            return {
                ...state,
                travelDay: action.payload
            };
        
        case types.filterUpdateReturnDay:
            return {
                ...state,
                returnDay: action.payload
            };

        case types.filterUpdateBudget:
            return {
                ...state,
                budget: action.payload
            };

        case types.filterUpdateDuration:
            return {
                ...state,
                duration: action.payload
            };

        case types.filterUpdateScale:
            return {
                ...state,
                scale: action.payload
            };

        case types.filterUpdateFlightType:
            return {
                ...state,
                typeFlight: action.payload
            };
        
        case types.filterUpdateClassFlight:
            return {
                ...state,
                classFlight: action.payload
            };
        
        case types.filterAddTraveler:
            return {
                ...state,
                travelers: state.travelers + 1
            };

        case types.filterSustractTraveler:
            return {
                ...state,
                travelers: state.travelers - 1
            };
    
        default:
            return state;
    }
}