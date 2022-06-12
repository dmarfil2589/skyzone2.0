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

        default:
            return state;
    }
}