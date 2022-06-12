import { useContext } from 'react';

import { Grid, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Divider, Box, Slider, CircularProgress } from '@mui/material';

import { PrincipalLayout } from '../layouts';
import { CityCard } from './CityCard'
import { formatWithoutDecimals } from '../../helpers';
import { FilterContext, FlightContext } from '../../context';
import { scales } from '../../contants';

export const ExploreScreen = () => {

    const { isLoadedCities, cities } = useContext( FlightContext );
    const { duration, budget, scale, updateDuration, updateBudget, updateScale } = useContext( FilterContext );

    return (
        <>  
            <PrincipalLayout>
                <Grid container>
                    <Grid item container md={3} sx={{ my: 3 }}>
                        <Grid item xs={12} sx={{ mr: { xs: 'none', sm: 4 } }}>
                            <FormControl>
                                <FormLabel> <b style={{ color: 'black' }}>Escalas</b> </FormLabel>
                            </FormControl>
                            
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={ scale }
                                onChange={ (e) => updateScale( e.target.value ) }
                            >
                                {
                                    scales.map( type => (
                                        <FormControlLabel
                                            key={ type.name }
                                            value={ type.value }
                                            control={ <Radio /> }
                                            label={ type.name }
                                        />
                                    ))
                                }
                            </RadioGroup>

                            <Divider sx={{ my: 2 }} />

                            <Box display='flex'>
                                <Typography gutterBottom variant='body1' sx={{ flexGrow: 1 }}>
                                    <b>Presupuesto</b>
                                </Typography>

                                <Typography gutterBottom variant='body1'>
                                    { budget === 2000 ? `${ formatWithoutDecimals(budget) }+`: formatWithoutDecimals(budget) }
                                </Typography>
                            </Box>

                            <Slider
                                min={100}
                                step={100}
                                max={2000}
                                value={ budget }
                                onChange={ (e) => updateBudget( e.target.value ) }
                                valueLabelDisplay="auto"
                            />

                            <Divider sx={{ my: 2 }} />
                            
                            <Box display='flex'>
                                <Typography gutterBottom variant='body1' sx={{ flexGrow: 1 }}>
                                    <b>Duracion</b>
                                </Typography>

                                <Typography gutterBottom variant='body1'>
                                    { duration === 12 ? `${ duration }+ horas`: `${ duration } ${ duration > 1 ? 'horas' : 'hora' }` }
                                </Typography>
                            </Box>

                            <Slider
                                min={1}
                                step={1}
                                max={12}
                                value={ duration }
                                onChange={ (e) => updateDuration( e.target.value ) }
                                valueLabelDisplay="auto"
                            />
                            
                        </Grid>
                    </Grid>

                    <Grid md={9} container item spacing={2} sx={{ my: 1 }}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>
                                Explora Destinos
                            </Typography>

                            <Typography variant='body2'>
                                desde { 'Caracas!!!!!!' }
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
                </Grid>
            </PrincipalLayout>
        </>
    )
}
