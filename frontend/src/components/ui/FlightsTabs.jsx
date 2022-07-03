import { useMemo, useState, useContext } from 'react';
import { FilterContext } from '../../context';
import propTypes from 'prop-types';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { FlightTabPanelCard } from '../flight';
import { formatWithoutDecimals } from '../../helpers';

export const FlightsTabs = ({ flights }) => {
    const { travelers} = useContext(FilterContext);

    const [ tabValue, setTabValue ] = useState(0);

    const handleChange = (e, newValue) => {
        setTabValue(newValue);
    };
    
    const sortedLessPrice = useMemo(() => [...flights].sort( (a, b) => a.price - b.price ), [flights]);
    const sortedFasterFlight = useMemo(() => [...flights].sort( (a, b) =>  a.timeOfFlight - b.timeOfFlight ), [flights]);

    return (
        <>
            <Grid item xs={12}>
                <Tabs
                    value={ tabValue }
                    onChange={ handleChange }
                    textColor='inherit'
                    variant='fullWidth'
                >
                    <Tab
                        label={(
                            <Box>
                                <Typography>
                                    <b>Precio más bajo</b>
                                </Typography>

                                {
                                    sortedLessPrice.length ? (
                                        <Typography>
                                            { formatWithoutDecimals( sortedLessPrice[0].price * travelers) }
                                        </Typography>
                                    ) : (<></>)
                                }
                            </Box>
                        )} 
                    />

                    <Tab
                        label={(
                            <Box>
                                <Typography>
                                    <b>más Rápido</b>
                                </Typography>

                                {
                                    sortedFasterFlight.length ? (
                                        <Typography>
                                            { formatWithoutDecimals( sortedFasterFlight[0].price * travelers ) }
                                        </Typography>
                                    ) : ( <></> )
                                }
                                
                            </Box>
                        )}
                    />
                </Tabs>
            </Grid>

            <Grid sx={{ p:2 }} container spacing={3}>
                {
                    tabValue ? (
                        <>
                            {
                                sortedFasterFlight.map( ( flight, index ) => (
                                    <Grid item xs={12} key={ flight._id } >
                                        <FlightTabPanelCard tabValue={ tabValue } flight={ flight } index={index} />
                                    </Grid>
                                ))
                            } 
                        </>
                    ) : (
                        <>
                            {
                                sortedLessPrice.map( (flight, index) => (
                                    <Grid item xs={12} key={ flight._id } >
                                        <FlightTabPanelCard tabValue={ tabValue } flight={ flight } index={index} />
                                    </Grid>
                                ))
                            }
                        </> 
                    )
                }
            </Grid>
        </>
    )
}

FlightsTabs.propTypes = {
    flights: propTypes.arrayOf( propTypes.shape({
        airline: propTypes.object.isRequired,
        number: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        scales: propTypes.number.isRequired,
        timeOfFlight: propTypes.number.isRequired,
        class: propTypes.string.isRequired,
        origin: propTypes.object.isRequired,
        destiny: propTypes.object.isRequired,
        exitDate: propTypes.string.isRequired
    })),
};