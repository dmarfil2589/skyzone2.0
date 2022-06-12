import { useContext } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import { PrincipalLayout } from '../layouts';
import { FlightCard } from '../flight';
import { FlightContext } from '../../context';

export const FlightsScreen = () => {
    const { cities, isLoadedCities } = useContext( FlightContext );
    
    return (
        <PrincipalLayout>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Encuentra la mejor oferta para ti
                    </Typography>
                </Grid>

                {
                    isLoadedCities ? cities.map( city => (
                        <FlightCard city={ city.name } key={ city._id } />
                    )) : 
                    (
                        <Grid container item xs={ 12 } justifyContent='center'>
                            <CircularProgress size={60} />
                        </Grid>
                    )
                }
                
            </Grid>
        </PrincipalLayout>
    )
}
