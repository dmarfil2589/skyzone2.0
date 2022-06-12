import { useContext, useState } from 'react';
import { Button, Grid, Menu } from '@mui/material';
import HikingIcon from '@mui/icons-material/Hiking';

import { CounterTravelers } from './menu'
import { ArrowDownRotate } from '../styled';
import { FilterContext } from '../../context';

export const ButtonCounterTravelers = () => {

    const { travelers, addTraveler, sustractTraveler  } = useContext(FilterContext);

    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid item>
            <Button onClick={ handleClick } color='inherit' endIcon={ <ArrowDownRotate open={open} /> }>
                { travelers } { travelers > 1 ? 'Viajeros' : 'Viajero' }
            </Button>
            <Menu
                open={ open }
                onClose={ handleClose }
                anchorEl={ anchorEl }
            >
                <CounterTravelers
                    info={{ 
                        title: 'viajeros',
                        add: () => addTraveler(),
                        sustract: () => sustractTraveler(),
                        count: travelers,
                        icon: <HikingIcon fontSize="small" />
                    }}
                />
            </Menu>
        </Grid>
    )
}
