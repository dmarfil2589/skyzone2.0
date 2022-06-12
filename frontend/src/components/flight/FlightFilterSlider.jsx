import propTypes from 'prop-types';
import { ListItemText, Slider } from '@mui/material'
import dayjs from "dayjs";

export const FlightFilterSlider = ({ value, handleChange, primary, secondary }) => {

    const formatLabelSlider = ( value ) => {
        const day = dayjs( new Date() ).set('hours', 0).set('minutes', 0);

        const hours = Math.floor( ( value / 60 ) )
        const minutes = value % 60;

        return day.set('hours', hours).set('minutes', minutes).format('h:mm a');
    };

    return (
        <>
            <ListItemText 
                primary={ primary }
                secondary={ secondary } 
            />

            <Slider
                min={0}
                step={5}
                max={1440}
                value={ value }
                onChange={ handleChange }
                valueLabelDisplay='auto'
                valueLabelFormat={ formatLabelSlider }
            />
        </>
    )
}

FlightFilterSlider.propTypes = {
    value: propTypes.arrayOf( propTypes.number ).isRequired,
    handleChange: propTypes.func.isRequired,
    primary: propTypes.string.isRequired,
    secondary: propTypes.string.isRequired,
};