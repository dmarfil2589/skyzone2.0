import { useContext } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';

import { FlightContext } from '../../context';
import { PrincipalLayout } from '../layouts/PrincipalLayout';
import { CityCard } from './CityCard'

export const HomeScreen = () => {

    const { isLoadedCities, cities } = useContext( FlightContext );

    return (
        <>  
            <PrincipalLayout>
                
                <Grid container spacing={2} sx={{ my: 1 }}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Destinos a los que puedes viajar
                        </Typography>
                    </Grid>
                    {
                        isLoadedCities ? cities.map( city => (
                            <CityCard key={ city._id } city={ city } />
                        )) : 
                        (
                            <Grid container item xs={ 12 } justifyContent='center'>
                                <CircularProgress size={60} />
                            </Grid>
                        )
                    }
                </Grid>
            </PrincipalLayout>
        </>
    )
}
