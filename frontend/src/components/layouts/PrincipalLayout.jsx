import { CircularProgress, Grid } from '@mui/material';
import { useContext } from 'react';

import { FlightContext } from '../../context';
import { FlightsFilter, Navbar, SideMenu } from '../ui';

export const PrincipalLayout = ({ children }) => {

    const { isLoadedCities } = useContext( FlightContext );

    return (
        <>
            <nav>
                <Navbar />
            </nav>

            <SideMenu />

            <main style={{ margin: '80px auto', maxWidth: '1440px', padding: '0px 30px' }}>
                {
                    isLoadedCities ? 
                        <FlightsFilter /> : 
                    
                        (
                            <Grid container item xs={ 12 } justifyContent='center'>
                                <CircularProgress size={40} />
                            </Grid>
                        )
                }                

                { children }
            </main>
        </>
    )
}
