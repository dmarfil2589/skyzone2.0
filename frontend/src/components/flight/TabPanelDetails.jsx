import propTypes from 'prop-types';
import { Avatar, capitalize, Checkbox, Grid, ListItemText } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';

export const TabPanelDetails = ({ airline, timeOfFlight, scales, origin, destiny, exitDate }) => {

    const calcuteDuration = ( time ) => {

        const hours = Math.floor( time / 60 );
        const minutes = time % 60;

        return dayjs( new Date() ).set('hours', 0).set('minutes', 0).add(hours, 'hours').add(minutes, 'minutes').format("H[h] m[m]");
    };

    const calculateHour = ( date, time = 0 ) => {

        let day = dayjs( date );

        if ( time ) {
            const hours = Math.floor( time / 60 );
            const minutes = time % 60;

            day = day.add(hours, 'hours').add(minutes, 'minutes');
        }

        return day.format('h:mm a');
    }
    
    const duration = useMemo(() => calcuteDuration( timeOfFlight ), [timeOfFlight]);
    const exitHour = useMemo(() => calculateHour( exitDate ), [exitDate]);
    const arrivalHour = useMemo(() => calculateHour( exitDate, timeOfFlight ), [exitDate, timeOfFlight]);

    return (
        <>
            <Checkbox />

            <Avatar sx={{ ml: 2 }} variant='square' sizes="large" src={ airline.logo } />

            <Grid item xs={12} sm ={5}>
                <ListItemText
                    sx={{ ml: 2 }}
                    primary={ `${ exitHour } - ${ arrivalHour }` }
                    secondary={ `${ origin.code.toUpperCase() } ${ capitalize(origin.name) } - ${ destiny.code.toUpperCase() } ${ capitalize(destiny.name) }` }
                    secondaryTypographyProps={{
                        noWrap: true
                    }}
                />
            </Grid>

            <ListItemText
                sx={{ ml: 2 }}
                primary={ `${ scales } ${ scales > 1 ? 'Escalas' : 'Escala' }` }
            />

            <ListItemText
                sx={{ ml: 2 }}
                primary={ duration }
            />
        </>
    )
}

TabPanelDetails.propTypes = {
    airline: propTypes.object.isRequired,
    timeOfFlight: propTypes.number.isRequired,
    scales: propTypes.number.isRequired,
    exitDate: propTypes.string.isRequired,
    origin: propTypes.object.isRequired,
    destiny: propTypes.object.isRequired    
}