import { Button, capitalize, Grid, Menu, MenuItem } from '@mui/material';
import { useContext, useState } from 'react'
import { classTypes } from '../../contants';
import { FilterContext } from '../../context';
import { ArrowDownRotate } from '../styled';

export const ButtonFlightClass = () => {

    const { classFlight, updateClassFlight } = useContext(FilterContext);

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
                { classFlight }
            </Button>
            <Menu
                open={ open }
                onClose={ handleClose }
                anchorEl={ anchorEl }
            >
                {
                    classTypes.map( type => (
                        <MenuItem key={ type.value } onClick={ () => updateClassFlight( type.value ) } >
                            { capitalize(type.name) }
                        </MenuItem>
                    ))
                }
            </Menu>
        </Grid>
    )
}
