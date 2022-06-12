import { useReducer } from 'react';

import { ServiceContext, serviceReducer } from './';
import { fetchWithoutToken } from '../../helpers/fetch';
import { types } from '../../types';

const SERVICES_INITIAL_STATE = {
    servicesSearched: [],
};

export const ServiceProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( serviceReducer , SERVICES_INITIAL_STATE );

    const searchServices = async ( filterObj ) => {

        const { destiny } = filterObj;

        try {
            const data = {
                destiny,
            };

            const response = await fetchWithoutToken('services/find', data, 'POST');
            const { services } = await response.json();

            dispatch({
                type: types.servicesSearch,
                payload: services
            });

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <ServiceContext.Provider value = {{
            ...state,

            //methods
            searchServices,
        }}>
            { children }
        </ServiceContext.Provider>
    );
};