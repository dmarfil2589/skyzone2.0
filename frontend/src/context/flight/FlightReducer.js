import { types } from "../../types";


export const flightReducer = ( state, action ) => {

    switch (action.type) {
        case types.citiesLoad:
            return {
                ...state,
                cities: [ ...action.payload ],
                isLoadedCities: true,
            };

        case types.flightsLoad:
            return {
                ...state,
                flights: [ ...action.payload ],
                isLoadedFlights: true,
            };

        case types.flightsUpdateOrigin:
            return {
                ...state,
                origin: action.payload
            };

        case types.flightsUpdateDestiny:
            return {
                ...state,
                destiny: action.payload
            };

        case types.flightsUpdateTravelDay:
            return {
                ...state,
                travelDay: action.payload
            };
        
        case types.flightsUpdateReturnDay:
            return {
                ...state,
                returnDay: action.payload
            };

        case types.flightsUpdateBudget:
            return {
                ...state,
                budget: action.payload
            };

        case types.flightsUpdateDuration:
            return {
                ...state,
                duration: action.payload
            };
    
        default:
            return state;
    }
}