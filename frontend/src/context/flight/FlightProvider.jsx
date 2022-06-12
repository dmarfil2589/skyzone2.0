import { useEffect, useReducer } from 'react';

import { FlightContext, flightReducer } from './';
import { fetchWithoutToken } from '../../helpers';
import { types } from '../../types';

const FLIGHT_INITIAL_STATE = {
    isLoadedCities: false,
    isLoadedFlights: false,
    flights: [],
    search: [],
    cities: [],
};

export const FlightProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( flightReducer , FLIGHT_INITIAL_STATE );
    
    useEffect(() => {
        
        async function fetchData () {

            const response = await fetchWithoutToken('cities');
            const { cities } = await response.json();
            
            updateCities( cities );
        }

        fetchData();

    }, []);

    useEffect(() => {
        
        async function fetchData () {
            const response = await fetchWithoutToken('flights');
            const { flights } = await response.json();
            
            updateFlights( flights );
        }

        fetchData();

    }, []);

    const updateCities = ( cities ) => {

        dispatch({
            type: types.citiesLoad,
            payload: cities
        });
    };

    const updateFlights = ( flights ) => {

        dispatch({
            type: types.flightsLoad,
            payload: flights
        });
    };

    const findFlights = async ( filterObj ) => {

        const { origin, destiny, budget, duration, scale, travelDay, returnDay, flightType, flightClass } = filterObj;

        try {
            const data = {
                origin,
                destiny,
                budget,
                duration,
                scale,
                travelDay,
                returnDay,
                flightType,
                flightClass
            };

            const response = await fetchWithoutToken('flights/find', data, 'POST');
            const { flights } = await response.json();

            dispatch({
                type: types.flightsSearch,
                payload: { flights }
            });

        } catch (error) {
            console.log(error);
        }
    };

    const findMoreFlights = async ( filterObj ) => {

        const { origin, destiny, budget, duration, scale, travelDay, returnDay, flightType, flightClass } = filterObj;

        try {
            const data = {
                origin,
                destiny,
                budget,
                duration,
                scale,
                travelDay,
                returnDay,
                flightType,
                flightClass
            };

            const response = await fetchWithoutToken('flights/find', data, 'POST');
            const { flights } = await response.json();

            dispatch({
                type: types.flightsSearch,
                payload: flights
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FlightContext.Provider value = {{
            ...state,

            //methods
            findFlights,
            findMoreFlights,
        }}>
            { children }
        </FlightContext.Provider>
    );
};