import { useContext, useEffect, useReducer } from 'react';
import dayjs from 'dayjs';

import { FilterContext, filterReducer } from './';
import { formatDate } from '../../helpers';
import { types } from '../../types';
import { FlightContext } from '../flight';

const currentDay = dayjs(new Date());
const weekAddedDay = currentDay.add(1, 'w');

const FILTER_INITIAL_STATE = {
    origin: '',
    destiny: [],
    scale: 0,
    travelDay: formatDate( currentDay ),
    returnDay: formatDate( weekAddedDay ),
    duration: 12,
    budget: 2000,
    typeFlight: 'ida',
    classFlight: 'economica',
    quantity: 1,
    travelers: 1,
};

export const FilterProvider = ({ children }) => {

    const { cities, findFlights } = useContext( FlightContext );
    const [ state, dispatch ] = useReducer( filterReducer , FILTER_INITIAL_STATE );

    useEffect( () => {

        if (cities.length)
            updateOrigin( cities[0]._id );

    }, [ cities ]);
    
    const handleSwap = () => {

        if ( state.destiny.length === 1 ) {
            updateOrigin( state.destiny[0] );
            updateDestiny( [ state.origin ] );
        }
    };

    const updateOrigin = ( origin ) => {
        dispatch({
            type: types.filterUpdateOrigin,
            payload: origin
        });
    };

    const updateDestiny = ( destiny ) => {

        dispatch({
            type: types.filterUpdateDestiny,
            payload: destiny
        });
    };

    const removeDestiny = ( destiny ) => {
        
        const newDestinies = state.destiny.filter( id => id !== destiny );

        dispatch({
            type: types.filterUpdateDestiny,
            payload: newDestinies
        });
    }

    const updateTravelDay = ( date ) => {
        dispatch({
            type: types.filterUpdateTravelDay,
            payload: date
        });

        if ( dayjs( date ) >= dayjs( state.returnDay ) )
            updateReturnDay( formatDate( dayjs( date ).add(1, 'w') ) )

    };

    const updateReturnDay = ( date ) => {
        dispatch({
            type: types.filterUpdateReturnDay,
            payload: date
        });
    };

    const updateDuration = ( hours ) => {
        dispatch({
            type: types.filterUpdateDuration,
            payload: hours
        });
    };

    const updateBudget = ( budget ) => {
        dispatch({
            type: types.filterUpdateBudget,
            payload: budget
        });
    };

    const updateScale = ( scale ) => {
        dispatch({
            type: types.filterUpdateScale,
            payload: scale
        });
    };

    const updateTypeFlight = ( type ) => {
        dispatch({
            type: types.filterUpdateFlightType,
            payload: type
        });
    };

    const updateClassFlight = ( type ) => {
        dispatch({
            type: types.filterUpdateClassFlight,
            payload: type
        });
    };

    const addTraveler = () => {

        if ( state.travelers < 9 ) {
            dispatch({
                type: types.filterAddTraveler
            });
        }

    };

    const sustractTraveler = () => {

        if ( state.travelers > 1 ) {
            dispatch({
                type: types.filterSustractTraveler
            });
        }
    };

    const searchFilter = () => {

        const filterObj = {
            origin: state.origin,
            destiny: state.destiny,
            budget: state.budget,
            duration: state.duration,
            scale: state.scale,
            travelDay: state.travelDay,
            returnDay: state.returnDay,
            flightType: state.typeFlight,
            flightClass: state.classFlight
        };

        findFlights( filterObj );
    };

    return (
        <FilterContext.Provider value = {{
            ...state,

            //methods
            handleSwap,
            updateOrigin,
            updateDestiny,
            removeDestiny,
            updateTravelDay,
            updateReturnDay,
            updateDuration,
            updateBudget,
            updateScale,
            updateTypeFlight,
            updateClassFlight,
            addTraveler,
            sustractTraveler,
            searchFilter
        }}>
            { children }
        </FilterContext.Provider>
    );
};