import { useReducer } from 'react';

import { UIContext, UIReducer } from './';
import { types } from '../../types';

const UI_INITIAL_STATE = {
    isMenuOpen: false,
};

export const UIProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer( UIReducer , UI_INITIAL_STATE );

    const toogleSideMenu = () => {
        dispatch({
            type: types.uiToggleMenu
        });
    };

    return (
        <UIContext.Provider value = {{
            ...state,

            //methods
            toogleSideMenu,
        }}>
            { children }
        </UIContext.Provider>
    );
};