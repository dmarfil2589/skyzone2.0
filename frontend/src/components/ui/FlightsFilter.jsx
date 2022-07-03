import { useContext, useMemo } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { Box, Button, capitalize, Chip, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FlightIcon from '@mui/icons-material/Flight';

import dayjs from "dayjs";

import { BusinessContext, FilterContext, FlightContext, ServiceContext } from "../../context";
import { ButtonFlightType, ButtonCounterTravelers, ButtonFlightClass } from "./";
import { MenuItemsFlights } from "./MenuItemsFlights";
import { formatDate } from '../../helpers';


const currentDay = dayjs(new Date());

const bussinessViews = [ '/business', '/services', '/events' ];

export const FlightsFilter = () => {

    const { cities } = useContext( FlightContext );

    const { 
        origin,
        destiny,
        travelDay,
        returnDay,
        typeFlight,
        handleSwap,
        updateOrigin,
        updateDestiny,
        updateTravelDay,
        updateReturnDay,
        searchFilter } = useContext( FilterContext );

    const { searchServices } = useContext( ServiceContext );
    const { searchBusiness } = useContext( BusinessContext );

    const navigation = useNavigate();
    const location = useLocation();

    const DataOrigin = useMemo( () => cities.find( city => city._id === origin ), [origin, cities] );
    const DataDestinations = useMemo( () => cities.filter( city => destiny.includes( city._id ) ), [destiny, cities] );
    const isBusinessView = useMemo( () => bussinessViews.includes(location.pathname), [ location.pathname ]);
    
    const searchFlights = () => {

        switch ( location.pathname ) {
            case '/flights':
                searchFilter();
                break;

            case '/business':
                searchBusiness({ destiny });
                break;

            case '/services':
                searchServices({ destiny });
                break;
        
            default:
                searchFilter();
                navigation(`/flights`);
                break;
        }        
    };
    
    return (
        <Grid container spacing={1}>
            <Grid container item spacing={1} xs={12} sx={{ display: isBusinessView ? 'none' : 'flex' }}>
                {/* Button change Flight type */}
                <ButtonFlightType />

                {/* Button change number of travelers */}
                <ButtonCounterTravelers />

                {/* Button change flight class */}
                <ButtonFlightClass />
            </Grid>

            {/* Origen */}
            <Grid item xs={12} sm={6} md={3} sx={{ display: isBusinessView ? 'none' : 'flex' }}>
                <FormControl fullWidth margin='dense'>
                    <InputLabel id='label-origin'>Origen</InputLabel>
                    <Select
                        labelId="label-origin"
                        label='Origen'
                        startAdornment={ <FlightIcon /> }
                        value={ origin }
                        defaultValue={ origin }
                        renderValue={ () => (
                            <Box ml={1} sx={{ display: 'flex', gap: 0.5 }}>
                                <Chip 
                                    label={`${ capitalize(DataOrigin.name) }, ${ capitalize( DataOrigin.country.name ) }`}
                                />
                            </Box>
                        )}
                        onChange={ (e) => updateOrigin(e.target.value) }
                    >
                        {
                            cities.map( city => (
                                <MenuItem value={ city._id } key={ city._id }>
                                    <MenuItemsFlights city={ city } checked={ origin === city._id } />
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item sx={{ display: isBusinessView ? 'none' : { xs: 'none', md: 'flex' }, alignItems: 'center' }} md={1}>
                <Button
                    type='button'
                    size='large'
                    variant='contained'
                    fullWidth
                    sx={{ height: '80%' }}
                    onClick={ () => handleSwap({ origin, destiny }) }
                    disabled={ destiny.length !== 1 }
                >
                    <SwapHorizIcon />
                </Button>
            </Grid>

            {/* destino */}
            <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth margin="dense">
                <InputLabel id='label-destiny'>Destinos</InputLabel>
                    <Select
                        labelId="label-destiny"
                        label='Destinos'
                        multiple
                        renderValue={ () => (
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {DataDestinations.map((city) => (
                                    <Chip 
                                        key={city._id}
                                        label={` ${ capitalize(city.name) }, ${ capitalize( city.country.name ) } `}
                                    />
                                ))}
                            </Box>
                        )}
                        startAdornment={ <FlightIcon /> }
                        value={ destiny }
                        onChange={ (e) => updateDestiny( e.target.value ) }
                    >
                        {
                            cities.map( city => {
                                if ( city._id !== origin ) {
                                    return (
                                        <MenuItem value={ city._id } key={ city._id }>
                                            <MenuItemsFlights city={ city } checked={ destiny.includes( city._id ) } />
                                        </MenuItem>
                                    )
                                }

                                return null;
                            })
                        }
                    </Select>
                </FormControl>
            </Grid>

            {/* Salida */}
            <Grid item xs={12} sm={6} md={2} sx={{ display: isBusinessView ? 'none' : 'flex' }}>
                <TextField
                    type='date'
                    label='Fecha de Salida'
                    onChange={ (e) => updateTravelDay(e.target.value) }
                    value={ travelDay }                        
                    inputProps={{ min: formatDate( currentDay ) }}
                    fullWidth
                    margin='dense'
                />
            </Grid>

            {/* Regreso */}
            <Grid item xs={12} sm={6} md={2} sx={{ display: isBusinessView ? 'none' : typeFlight === 'ida' ? 'none' : 'block' }}>
                <TextField
                    type='date'
                    label='Fecha de Regreso'
                    value={ returnDay }
                    onChange={ (e) => updateReturnDay(e.target.value) }
                    inputProps={{ 
                        min: formatDate( dayjs( travelDay ).add(1, 'd') ),
                    }}
                    fullWidth
                    margin='dense'
                />
            </Grid>

            <Grid item display='flex' alignItems='center' xs={12} md={1}>
                <Button 
                    type='submit'
                    size='large'
                    variant='contained'
                    fullWidth
                    sx={{ height: { md: '80%' } }}
                    onClick={ searchFlights }
                >
                    <SearchIcon />
                </Button>
            </Grid>
        </Grid>
    )
}
