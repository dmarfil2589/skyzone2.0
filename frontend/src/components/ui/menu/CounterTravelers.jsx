import propTypes from 'prop-types';

import { Box, capitalize, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CounterTravelers = ({ info }) => {

    const { icon, add, sustract, title, count } = info;

    return (
        <Grid container item xs={12} sx={{ width: '250px', padding: '10px 15px' }} alignItems='center'>
            { icon }

            <Typography ml={2}>
                { capitalize(title) }
            </Typography>
            <Box flex={1} />
                            
            <IconButton size="small" color='inherit' onClick={ sustract }>
                <RemoveIcon fontSize='small' />
            </IconButton>

            <Typography mx={2}>
                { count }
            </Typography>

            <IconButton size="small" color='inherit' onClick={ add }>
                <AddIcon fontSize='small' />
            </IconButton>
        </Grid>
    )
}

CounterTravelers.propTypes = {
    info: propTypes.exact({
        icon: propTypes.element.isRequired,
        add: propTypes.func.isRequired,
        sustract: propTypes.func.isRequired,
        title: propTypes.string.isRequired,
        count: propTypes.number.isRequired,
    }),
}