import propTypes from 'prop-types';
import { useContext} from 'react';
import { FilterContext } from '../../context';
import { Box, Button, Chip, Divider, Grid, IconButton, Paper, Typography } from '@mui/material';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { TabPanelDetails } from './TabPanelDetails';
import { formatCurrency, formatWeight } from '../../helpers';

export const FlightTabPanelCard = ({ tabValue, flight, index }) => {
    const { travelers} = useContext(FilterContext);

    return (
        <Paper sx={{ p: 3 }} elevation={3}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={9} container alignItems='center' sx={{ borderLeft: '1px' }}>

                    <Grid item container xs={12}>
                        {
                            index === 0 && (
                                <Chip label={ tabValue === 0 ? 'El Más Barato' : 'Más Rápido' }  color='primary' />
                            )
                        }

                        <Box flex='1' />

                        <IconButton>
                            <FavoriteOutlinedIcon />
                        </IconButton>
                    </Grid>

                    {/* Salida */}
                    <Grid item container xs={12} mt={2} alignItems='center'>
                        <TabPanelDetails 
                            airline={ flight.airline }
                            destiny={ flight.destiny }
                            origin={ flight.origin }
                            scales={ flight.scales }
                            timeOfFlight={ flight.timeOfFlight }
                            exitDate={ flight.exitDate }
                        />
                    </Grid>

                    {/* Regreso */}
                    {
                        flight.returnDate && (
                            <Grid item container xs={12} mt={2} alignItems='center'>
                                <TabPanelDetails 
                                    airline={ flight.airline }
                                    destiny={ flight.origin }
                                    origin={ flight.destiny }
                                    scales={ flight.scales }
                                    timeOfFlight={ flight.timeOfFlight }
                                    exitDate={ flight.returnDate }
                                />
                            </Grid>
                        )
                    }

                    <Grid item container mt={1} xs={12}>
                        <Typography variant='body2'>
                            {flight.airline.name  }
                        </Typography>
                    </Grid>

                    <Divider sx={{ ml: 2 }} orientation='vertical' flexItem />
                </Grid>

                <Grid container item xs={12} sm={3} flexDirection='column' justifyContent='end'>

                    <Typography variant='subtitle2' color='text.secondary'>
                        Limite de peso: { formatWeight( flight.airline.maxWeight ) }
                    </Typography>

                    <Typography variant='subtitle2' sx={{ mb: 2 }}>
                        Cargo extra limite de peso: { formatCurrency( flight.airline.weightCharge ) }
                    </Typography>
                            
                    <Typography variant='h5'>
                        <b> { formatCurrency( flight.price * travelers ) } </b>
                    </Typography>

                    <Button
                        sx={{ mt: 2 }}
                        variant='contained'
                        color='kayak'
                        component='a'
                        target='_blank'
                        href={ flight.airline.pageweb }
                    >
                        Ir a la página
                    </Button>
                </Grid>
            </Grid>            
        </Paper>
    )
}

FlightTabPanelCard.propTypes = {
    tabValue: propTypes.number.isRequired,
    flight: propTypes.object.isRequired,
    index: propTypes.number.isRequired
};