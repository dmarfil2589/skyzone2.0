import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import FlightIcon from '@mui/icons-material/Flight';
import dayjs from "dayjs";

import { FlightContext } from "../../context";
import { formatDate } from '../../helpers';

const currentDay = dayjs(new Date());

export const FlightsFilter = () => {

    const { 
        origin,
        destiny,
        travelDay,
        returnDay,
        cities,
        handleSwap,
        updateOrigin,
        updateDestiny,
        updateTravelDay,
        updateReturnDay,
        findFlights } = useContext( FlightContext );

    const navigation = useNavigate();

    const searchFlights = () => {
        const searchOrigin = cities.find( city => city._id === origin );
        const searchDestiny = cities.find( city => city._id === destiny );
        findFlights();
        navigation(`/flights?search=${ searchOrigin.code }-${ searchDestiny.code }`);
    }    

    return (
        <Grid container spacing={1}>
            {/* Origen */}
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    label='Origen'
                    select
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                                <FlightIcon />
                            </InputAdornment>
                        )
                    }}
                    value={ origin }
                    defaultValue={ origin }                    
                    fullWidth
                    margin='dense'
                    onChange={ (e) => updateOrigin(e.target.value) }
                >
                    <MenuItem value='' disabled>
                        Origen
                    </MenuItem>

                    {
                        cities.map( city => (
                            <MenuItem value={ city._id } key={ city._id }>
                                { city.name }
                            </MenuItem>
                        ))
                    }

                </TextField>
            </Grid>

            <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }} md={1}>
                <Button
                    type='button'
                    size='large'
                    variant='contained'
                    fullWidth
                    sx={{ height: '80%' }}
                    onClick={ () => handleSwap({ origin, destiny }) }
                >
                    <SwapHorizIcon />
                </Button>
            </Grid>

            {/* destino */}
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    select
                    label='Destino'
                    InputProps={{ 
                        startAdornment: (
                            <InputAdornment position="start">
                                <FlightIcon />
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                    value={ destiny }
                    defaultValue={ destiny }    
                    margin='dense'
                    onChange={ (e) => updateDestiny(e.target.value) }
                >
                    <MenuItem value='' disabled>
                        Destino
                    </MenuItem>

                    {
                        cities.map( city => (
                            <MenuItem value={ city._id } key={ city._id }>
                                { city.name }
                            </MenuItem>
                        ))
                    }

                </TextField>
            </Grid>

            {/* Salida */}
            <Grid item xs={12} sm={6} md={2}>
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
            <Grid item xs={12} sm={6} md={2}>
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
