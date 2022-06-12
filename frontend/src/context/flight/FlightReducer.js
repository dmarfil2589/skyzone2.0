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

        case types.flightsSearch:
            return {
                ...state,
                search: [ ...action.payload.flights ],
                totalPages: action.payload.totalPages
            };

        case types.flightsSearchMore:
            return {
                ...state,
                search: [ ...state.search, ...action.payload ],
            };

        default:
            return state;
    }
}