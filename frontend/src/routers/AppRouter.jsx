import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomeScreen, ExploreScreen, FlightsScreen } from '../components/home';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Recordar implementar PublicRouter y PrivateRouter luego */}
                <Route path="/" exact element={ <HomeScreen /> } />
                <Route path="/explore" exact element={ <ExploreScreen /> } />
                <Route path="/flights" exact element={ <FlightsScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}
