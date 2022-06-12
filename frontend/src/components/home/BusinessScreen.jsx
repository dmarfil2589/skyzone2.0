import { useContext, useEffect, useState } from 'react';
import { capitalize, Grid, Typography } from '@mui/material';

import { BusinessContext, FilterContext, FlightContext } from '../../context';
import { PrincipalLayout } from '../layouts'
import { BusinessCardInfo } from '../business';

export const BusinessScreen = () => {

    const { cities, isLoadedCities } = useContext( FlightContext );
    const { destiny } = useContext( FilterContext );
    const { businessSearched, searchBusiness } = useContext( BusinessContext );

    const [ dataDestiny, setDataDestiny ] = useState(null);
    
    useEffect(() => {

        if( isLoadedCities )
            searchBusiness({ destiny });

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
                            Negocios que te podrian interesar mientras viajas { dataDestiny ? `a ${ capitalize(dataDestiny.name) }` : 'al destino que prefieras' }
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container spacing={2}>

                    {
                        businessSearched.map( business => (
                            <BusinessCardInfo
                                key={ business._id }
                                location={ getLocationInfo( business.city ) }
                                business={{
                                    name: business.name,
                                    image: business.image,
                                    description: business.description,
                                }}
                            />
                        ))
                    }
                </Grid>
            </PrincipalLayout>
        </>
    )
}
