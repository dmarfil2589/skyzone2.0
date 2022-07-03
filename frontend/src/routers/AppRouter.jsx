import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ExploreScreen, FlightsScreen, BusinessScreen, ServicesScreen } from '../components/home';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <ExploreScreen /> } />
                <Route path="/flights" exact element={ <FlightsScreen /> } />
                <Route path="/business" exact element={ <BusinessScreen /> } />
                <Route path="/services" exact element={ <ServicesScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}
