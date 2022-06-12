import propTypes from 'prop-types';
import { Avatar, Box, capitalize, Checkbox, Grid, ListItemText } from '@mui/material';


export const MenuItemsFlights = ({ city, checked }) => {
    return (    
        <Grid container item xs={12}>
            <Avatar variant='square' sizes="large" src={ city.image } />
            <ListItemText
                sx={{ ml: 2 }}
                primary={ `${ capitalize(city.name) }, Venezuela` }
                secondary={ capitalize(city.name) }
            />
            <Box flex={1} />
            <Checkbox checked={ checked } /> 
        </Grid>
    )
}   

MenuItemsFlights.propTypes = {
    city: propTypes.shape({
        name: propTypes.string.isRequired,
        code: propTypes.string.isRequired,
        image: propTypes.string.isRequired
    }),
    checked: propTypes.bool.isRequired
};