import { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Typography, CircularProgress, Button, CardActions, capitalize, ImageListItem, Card, CardMedia} from '@mui/material';

import { SideMenu, Navbar} from '../ui';
import { CityCard } from './CityCard'
import { FilterContext, FlightContext } from '../../context';

export const ExploreScreen = () => {

    const { isLoadedCities, cities } = useContext( FlightContext );
    const [dataOrigin, setDataOrigin ] = useState(null);
    const {updateDestiny} = useContext( FilterContext );

    useEffect(() => {

        if( isLoadedCities ) {
            const dataOrigin = cities.find( city => city._id === origin )
            setDataOrigin( dataOrigin );
        }
        
    }, [ isLoadedCities, cities, setDataOrigin, origin ]);


    return (
        <>  
            <nav>
                <Navbar />
            </nav>  
            <SideMenu />
            
            <main style={{ margin: '80px auto', maxWidth: '1440px', padding: '0px 30px' }}>
                
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography align='center' variant='h3' marginTop={4} color='text.secondary'>
                                Encuentra cientos de vuelos en un solo lugar
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid md={12} container item spacing={2} sx={{ my: 1 }}>
                        {
                            isLoadedCities ? cities.map( city => (
                                <CityCard key={ city._id } city={ city }/>
                            )) : 
                            (
                                <Grid container item xs={ 12 } justifyContent='center'>
                                    <CircularProgress size={60} />
                                </Grid>
                            )
                        }
                    </Grid>
                </Grid>
   
                <Grid container marginTop={20}>
                    <Grid md={6} item spacing={2} sx={{ my: 1 }}>
                        {
                            isLoadedCities ? (
                            <CardMedia
                                component='img'
                                alt='image'
                                height='400'
                                image="https://veigler.com/wp-content/uploads/2019/07/alojamientos.jpg"
                            />
                            ): ""
                        }
                    </Grid>
                    <Grid md={6} item spacing={2} sx={{ my: 1 }} textAlign='center'>
                        <Typography align='center' variant='h3' color='text.secondary'>
                            ¿Necesitas hospedaje?
                        </Typography>
                        <Button
                            to="/services"
                            float='center'
                            sx={{ mt: 2 }}
                            variant='contained'
                            color='kayak'
                            component={ RouterLink }
                            target='_blank'
                        >
                            Encuentra el lugar de tus sueños
                        </Button>
                    </Grid>
                </Grid>

                <Grid container marginTop={20}>
                    <Grid md={6} item spacing={2} sx={{ my: 1 }} textAlign='center'>
                        <Typography align='center' variant='h3' color='text.secondary'>
                            Asesoría en línea
                        </Typography>
                        <Button
                            float='center'
                            sx={{ mt: 2 }}
                            variant='contained'
                            color='whatsapp'
                            target='_blank'
                            href='https://api.whatsapp.com/send/?phone=584129855059&text&app_absent=0'
                        >
                            Contáctanos a través de Whatsapp
                        </Button>
                    </Grid>
                    <Grid md={6} item spacing={2} sx={{ my: 1 }}>
                        {
                            isLoadedCities ? (
                            <CardMedia
                                component='img'
                                alt='image'
                                height='400'
                                image="https://www.viancotetransporta.com/wp-content/uploads/2020/11/web-asesoria-online_Mesa-de-trabajo-1.png"
                            />
                            ): ""
                        }
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
