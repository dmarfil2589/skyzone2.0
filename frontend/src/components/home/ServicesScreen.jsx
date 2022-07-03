import { useContext, useEffect, useState } from 'react'
import { capitalize, Grid, Typography } from '@mui/material'

import { FilterContext, FlightContext, ServiceContext } from '../../context';
import { PrincipalLayout } from '../layouts'
import { ServiceCardInfo } from '../services';

export const ServicesScreen = () => {

    const { cities, isLoadedCities } = useContext( FlightContext );
    const { destiny } = useContext( FilterContext );
    const { servicesSearched, searchServices } = useContext( ServiceContext );

    const [ dataDestiny, setDataDestiny ] = useState(null);

    useEffect(() => {

        if( isLoadedCities )
            searchServices({ destiny });

        // eslint-disable-next-line
    }, [ destiny, isLoadedCities ]);

    useEffect(() => {

        if( isLoadedCities ) {
            const dataDestiny = cities.find( city => destiny.length === 1 ? city._id === destiny[0] : '' );
            setDataDestiny( dataDestiny );
        }
        
    }, [ isLoadedCities, cities, destiny ]);

    const getLocationInfo = ( cityId ) => {
        
        const city = cities.find( city => city._id === cityId );

        return {
            city: city.name,
            country: city.country.name
        };
    };

    return (
        <>
            <PrincipalLayout>
                <Grid container my={2}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Lugares que encontraras mientras viajas { dataDestiny ? `${ capitalize( dataDestiny.name ) }` : 'al destino que prefieras' }
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {
                        servicesSearched.map( service => (
                            <ServiceCardInfo
                                key={ service._id }
                                location={ getLocationInfo( service.business.city ) }
                                service={{
                                    name: service.name,
                                    image: service.image,
                                    description: service.description,
                                }}
                                business={ service.business.name }
                            />
                        ))
                    }
                </Grid>
            </PrincipalLayout>
        </>
    )
}
