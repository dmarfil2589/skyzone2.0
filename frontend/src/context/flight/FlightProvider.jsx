import { useEffect, useReducer } from 'react';
import dayjs from 'dayjs';

import { FlightContext, flightReducer } from './';
import { fetchWithoutToken, formatDate } from '../../helpers';

const currentDay = dayjs(new Date());
const weekAddedDay = currentDay.add(1, 'w');

const FLIGHT_INITIAL_STATE = {
    isLoadedCities: false,
    isLoadedFlights: false,
    flights: [],
    cities: [],
    origin: '',
    destiny: '',
    travelDay: formatDate( currentDay ),
    returnDay: formatDate( weekAddedDay ),
    duration: 12,
    budget: 2000,
};

export const FlightProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( flightReducer , FLIGHT_INITIAL_STATE );
    

    useEffect(() => {
        
        async function fetchData () {

            const response = await fetchWithoutToken('cities');
            const { cities } = await response.json();
            
            updateCities( cities );

            updateOrigin(cities[0]._id);
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
            type: '[Flights] - Load Cities',
            payload: cities
        });
    };

    const updateFlights = ( flights ) => {

        dispatch({
            type: '[Flights] - Load Flights',
            payload: flights
        });
    };

    const handleSwap = ({ origin, destiny }) => {
        updateOrigin( destiny );
        updateDestiny( origin );
    };

    const updateOrigin = ( origin ) => {
        dispatch({
            type: '[Flights] - Update Origin',
            payload: origin
        });
    };

    const updateDestiny = ( destiny ) => {
        dispatch({
            type: '[Flights] - Update Destiny',
            payload: destiny
        });
    };

    const updateTravelDay = ( date ) => {
        dispatch({
            type: '[Flights] - Update Travel Day',
            payload: date
        });
    };

    const updateReturnDay = ( date ) => {
        dispatch({
            type: '[Flights] - Update Return Day',
            payload: date
        });
    };

    const updateDuration = ( hours ) => {
        dispatch({
            type: '[Flights] - Update Duration',
            payload: hours
        });
    };

    const updateBudget = ( budget ) => {
        dispatch({
            type: '[Flights] - Update Budget',
            payload: budget
        });
    };

    const findFlights = async () => {
        try {
            const data = {
                origin: state.origin,
                destiny: state.destiny,
                budget: state.budget,
                duration: state.duration,
                scales: 0,
                //travelDay: state.travelDay
            };

            const response = await fetchWithoutToken('flights/find', data, 'POST');
            const { flights } = await response.json();

            updateFlights( flights );

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FlightContext.Provider value = {{
            ...state,

            //methods
            handleSwap,
            updateOrigin,
            updateDestiny,
            updateTravelDay,
            updateReturnDay,
            updateDuration,
            updateBudget,
            findFlights,
        }}>
            { children }
        </FlightContext.Provider>
    );
};