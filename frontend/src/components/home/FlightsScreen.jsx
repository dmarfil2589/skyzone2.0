import { useContext, useEffect, useMemo, useState } from 'react';
import { capitalize, Checkbox, CircularProgress, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, List, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import dayjs from "dayjs";
import 'dayjs/locale/es';

import { PrincipalLayout } from '../layouts';
import { FlightCard, FlightFilterSlider } from '../flight';
import { FilterContext, FlightContext } from '../../context';
import { FlightsTabs } from '../ui';

const filterPage = {
    noScales: true,
    oneScales: true,
    allScales: true,
}

export const FlightsScreen = () => {
    const { cities, isLoadedCities, search } = useContext( FlightContext );
    const { origin, destiny, typeFlight, travelDay, returnDay, classFlight, searchFilter } = useContext( FilterContext );
    const [ result, setResult ] = useState( search );

    const [ filter, setFilter ] = useState(filterPage);
    const [ alignment, setAlignment ] = useState('despegue');
    const [ dataOrigin, setDataOrigin ] = useState(null);
    const [ dataDestiny, setDataDestiny ] = useState(null);

    /* constantes para el slider de horas de despegue */
    const travelDayHour = dayjs( travelDay ).set('hours', 0).set('minutes', 0);
    const travelStart = dayjs( travelDayHour );
    const travelEnd = dayjs( travelDayHour );

    /* constantes para el slider de horas de regreso */
    const returnDayHour = dayjs( returnDay ).set('hours', 0).set('minutes', 0);
    const returnStart = dayjs( returnDayHour );
    const returnEnd = dayjs( returnDayHour );

    /* estados de los tiempos de salida del vuelo */
    const [ rangeHourTravel, setRangeHourTravel ] = useState([0, 1440]);
    const [ valueRangeTravel, setValueRangeTravel ] = useState( [ travelStart, travelEnd ] );

    /* estados de los tiempos de regreso del vuelo */
    const [ rangeHourReturn, setRangeHourReturn ] = useState([0, 1440]);
    const [ valueRangeReturn, setValueRangeReturn ] = useState( [ returnStart, returnEnd ] );

    const formatTimeSelected = ( time, rangeTime ) => {

        const day = time.locale('es').format('ddd');
        const timeStart = rangeTime[0].format('h:mm a');
        const timeEnd = rangeTime[1].format('h:mm a');

        return `${ day } ${ timeStart } - ${ timeEnd }`;
    };

    const dayTimeTravelSelectSlider = useMemo(() => formatTimeSelected( travelDayHour, valueRangeTravel ) , [ travelDayHour, valueRangeTravel ]);
    const dayTimeReturnSelectSlider = useMemo(() => formatTimeSelected( returnDayHour, valueRangeReturn ) , [ returnDayHour, valueRangeReturn ]);


    useEffect( () => {
        const startHours = Math.floor( ( rangeHourTravel[0] / 60 ) )
        const startMinutes = rangeHourTravel[0] % 60;

        const endHours = Math.floor( ( rangeHourTravel[1] / 60 ) )
        const endMinutes = rangeHourTravel[1] % 60;

        const newStart = valueRangeTravel[0].set('hours', startHours).set('minutes', startMinutes);
        const newEnd = valueRangeTravel[1].set('hours', endHours).set('minutes', endMinutes);

        // eslint-disable-next-line
        setValueRangeTravel( [ newStart , newEnd ] );

        // eslint-disable-next-line
    }, [ setValueRangeTravel, rangeHourTravel ] );

    useEffect( () => {
        const startHours = Math.floor( ( rangeHourReturn[0] / 60 ) )
        const startMinutes = rangeHourReturn[0] % 60;

        const endHours = Math.floor( ( rangeHourReturn[1] / 60 ) )
        const endMinutes = rangeHourReturn[1] % 60;

        const newStart = valueRangeReturn[0].set('hours', startHours).set('minutes', startMinutes);
        const newEnd = valueRangeReturn[1].set('hours', endHours).set('minutes', endMinutes);

        setValueRangeReturn( [ newStart , newEnd ] );

        // eslint-disable-next-line
    }, [ setValueRangeReturn, rangeHourReturn ] );

    useEffect(() => {

        if( isLoadedCities ) {
            const dataOrigin = cities.find( city => city._id === origin )
            setDataOrigin( dataOrigin );

            const dataDestiny = cities.find( city => destiny.length === 1 ? city._id === destiny[0] : '' );
            setDataDestiny( dataDestiny );
        }
        
    }, [ isLoadedCities, cities, setDataOrigin, origin, destiny, setDataDestiny ]);
    
    useEffect(() => {
        setResult( search );
    }, [ search, setResult ]);

    useEffect(() => {

        let filterSearch = [ ...search ];

        if ( !filter.noScales )
            filterSearch = filterSearch.filter( flight => flight.scales !== 0 );

        if ( !filter.oneScales )
            filterSearch = filterSearch.filter( flight => flight.scales !== 1 );

        if ( !filter.allScales )
            filterSearch = filterSearch.filter( flight => flight.scales < 2 );

        if ( alignment === 'despegue' ) {
            filterSearch = filterRangeHours( filterSearch, rangeHourTravel );
            filterSearch = filterRangeHours( filterSearch, rangeHourReturn, 1 );
        }

        else if ( alignment === 'aterrizaje' ) {
            filterSearch = filterRangeHoursArrival( filterSearch, rangeHourTravel );
            filterSearch = filterRangeHoursArrival( filterSearch, rangeHourReturn, 1 );
        }

        setResult( filterSearch );

    }, [ filter, setResult, search, rangeHourTravel, rangeHourReturn, alignment ]);

    useEffect(() => {

        if( isLoadedCities && origin )
            searchFilter();

    }, [ origin, destiny, typeFlight, travelDay, returnDay, classFlight, isLoadedCities ]);

    //methods
    const filterRangeHours = ( flights, arrayRangeHours, isReturn = 0 ) => {
        return flights.filter( flight => {

            const timeExit = dayjs( isReturn ? flight.returnDate : flight.exitDate );

            const day = timeExit.get('days');

            const startHour = Math.floor( arrayRangeHours[0] / 60 );
            const startMinute = arrayRangeHours[0] % 60 ;

            const endHour = Math.floor( arrayRangeHours[1] / 60 );
            const endMinute = arrayRangeHours[1] % 60;

            const startTime = timeExit.set(day, 'days').set('hours', 0).set('minutes', 0).add( startHour, 'hours' ).add(startMinute, 'minutes');
            const endTime = timeExit.set(day, 'days').set('hours', 0).set('minutes', 0).add( endHour, 'hours' ).add(endMinute, 'minutes');

            if( timeExit.diff(startTime, 'minutes') >= 0 && endTime.diff(timeExit, 'minutes') > 0 )
                return true;

            return false;
        });
    };

    const filterRangeHoursArrival = ( flights, arrayRangeHours, isReturn = 0 ) => {
        return flights.filter( flight => {
            
            const hoursFlight = Math.floor( flight.timeOfFlight / 60 );
            const minutesFlight = flight.timeOfFlight % 60 ;
            
            const timeExit = dayjs( isReturn ? flight.returnDate : flight.exitDate ).add(hoursFlight, 'hours').add(minutesFlight, 'minutes');

            const day = timeExit.get('days');

            const startHour = Math.floor( arrayRangeHours[0] / 60 );
            const startMinute = arrayRangeHours[0] % 60 ;

            const endHour = Math.floor( arrayRangeHours[1] / 60 );
            const endMinute = arrayRangeHours[1] % 60;

            const startTime = timeExit.set(day, 'days').set('hours', 0).set('minutes', 0).add( startHour, 'hours' ).add(startMinute, 'minutes');
            const endTime = timeExit.set(day, 'days').set('hours', 0).set('minutes', 0).add( endHour, 'hours' ).add(endMinute, 'minutes');

            if( timeExit.diff(startTime, 'minutes') >= 0 && endTime.diff(timeExit, 'minutes') > 0 )
                return true;

            return false;
        });
    };
    
    const handleChange = ( e ) => {
        setFilter({
            ...filter,
            [e.target.name]: !filter[e.target.name]
        });
    };

    const handleToogleChange = (event, newAlignment) => {
        setAlignment(newAlignment);

        if( newAlignment === 'despegue' ) {
            
        }
        else {
            setRangeHourTravel([0, 1440]);
            setRangeHourReturn([0, 1440]);
        }
    };
    
    return (
        <PrincipalLayout>
            <Grid container spacing={2} mt={2}>
                <Grid item container sx={{ display: { xs: 'none', md: 'block' } }} md={3}>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormLabel> <b style={{ color: 'black' }}>Escalas</b> </FormLabel>
                        </FormControl>

                        <FormGroup>
                            <FormControlLabel control={ <Checkbox name='noScales' checked={ filter.noScales } onChange={ handleChange } /> } label='Directo' />
                            <FormControlLabel control={ <Checkbox name='oneScales' checked={ filter.oneScales } onChange={ handleChange } /> } label='1 Escala' />
                            <FormControlLabel control={ <Checkbox name='allScales' checked={ filter.allScales } onChange={ handleChange } /> } label='2 o mas Escalas' />
                        </FormGroup>
                    </Grid>

                    <Divider />

                    <Grid item xs={12} my={2}>
                        <FormControl>
                            <FormLabel> <b style={{ color: 'black' }}>Horarios</b> </FormLabel>
                        </FormControl>

                        <ToggleButtonGroup
                            exclusive
                            fullWidth
                            sx={{ mt: 1 }}
                            value={ alignment }
                            onChange={ handleToogleChange }
                        >
                            <ToggleButton value='despegue'> Despegue </ToggleButton>
                            <ToggleButton value='aterrizaje'> Aterrizaje </ToggleButton>
                        </ToggleButtonGroup>

                        <FormGroup sx={{ mt: 1 }}>
                            <List>
                                {
                                    alignment === 'despegue' && (
                                        <>
                                            <FlightFilterSlider 
                                                value={ rangeHourTravel }
                                                handleChange={ (e, newValue) => setRangeHourTravel( newValue ) }
                                                primary = { `${ capitalize(alignment) } de ${ dataOrigin ? dataOrigin.code.toUpperCase() : '' }` }
                                                secondary={ dayTimeTravelSelectSlider }
                                            />

                                            {
                                                typeFlight === 'ida y vuelta' && (
                                                    <>
                                                        <FlightFilterSlider 
                                                            value={ rangeHourReturn }
                                                            handleChange={ (e, newValue) => setRangeHourReturn(newValue) }
                                                            primary = { `${ capitalize(alignment) } de ${ dataDestiny ? dataDestiny.code.toUpperCase() : 'Destino' }` }
                                                            secondary={ dayTimeReturnSelectSlider } 
                                                        />
                                            
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                }

                                {
                                    alignment === 'aterrizaje' && (
                                        <>
                                            <FlightFilterSlider 
                                                value={ rangeHourTravel }
                                                handleChange={ (e, newValue) => setRangeHourTravel( newValue ) }
                                                primary = { `${ capitalize(alignment) } a ${ dataDestiny ? dataDestiny.code.toUpperCase() : 'Destino' }` }
                                                secondary={ dayTimeTravelSelectSlider } 
                                            />
                                        
                                            {
                                                typeFlight === 'ida y vuelta' && (
                                                    <>
                                                        <FlightFilterSlider 
                                                            value={ rangeHourReturn }
                                                            handleChange={ (e, newValue) => setRangeHourReturn(newValue) }
                                                            primary = { `${ capitalize(alignment) } a ${ dataOrigin.code.toUpperCase() }` }
                                                            secondary={ dayTimeReturnSelectSlider } 
                                                        />
                                            
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                }
                                
                            </List>
                        </FormGroup>
                    </Grid>
                </Grid>

                <Grid container item xs={12} md={9}>
                    <FlightsTabs
                        flights={ result }
                    />
                </Grid>

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
