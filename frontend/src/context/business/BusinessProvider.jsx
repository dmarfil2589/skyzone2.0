import { useReducer } from 'react';

import { BusinessContext, businessReducer } from './';
import { fetchWithoutToken } from '../../helpers/fetch';
import { types } from '../../types';

const Business_INITIAL_STATE = {
    isLoadBusiness: false,
    businessSearched: [],
};

export const BusinessProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( businessReducer , Business_INITIAL_STATE );

    const searchBusiness = async ( filterObj ) => {

        const { destiny } = filterObj;

        try {
            const data = {
                destiny,
            };

            const response = await fetchWithoutToken('business/find', data, 'POST');
            const { business } = await response.json();

            dispatch({
                type: types.businessSearch,
                payload: business
            });

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <BusinessContext.Provider value = {{
            ...state,

            //methods
            searchBusiness,
        }}>
            { children }
        </BusinessContext.Provider>
    );
};