import { useEffect, useReducer } from 'react';

import { CityContext, CityReducer } from './';

const CITY_INITIAL_STATE = {
    isLoaded: false,
    cities: [],
};

const BASEURL = process.env.REACT_APP_API_URL;

export const CityProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( CityReducer , CITY_INITIAL_STATE );

    useEffect(() => {
        
        async function fetchData () {
            const response = await fetch(`${ BASEURL }/cities`);
            const { cities } = await response.json();
            dispatch({
                type: '[CITY] - Load Cities',
                payload: cities
            });
        }

        fetchData();

    }, []);

    return (
        <CityContext.Provider value = {{
            ...state,
        }}>
            { children }
        </CityContext.Provider>
    );
};