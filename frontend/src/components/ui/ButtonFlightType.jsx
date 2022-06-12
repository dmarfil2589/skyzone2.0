import { useContext, useState } from "react";
import { Button, capitalize, Grid, Menu, MenuItem } from "@mui/material"

import { typesFlights } from "../../contants"
import { ArrowDownRotate } from "../styled"
import { FilterContext } from "../../context";


export const ButtonFlightType = () => {

    const { typeFlight, updateTypeFlight } = useContext(FilterContext);

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
                { typeFlight }
            </Button>
            <Menu
                open={ open }
                onClose={ handleClose }
                anchorEl={ anchorEl }
            >
                {
                    typesFlights.map( type => (
                        <MenuItem key={ type.value } onClick={ () => updateTypeFlight( type.value ) } >
                            { capitalize(type.name) }
                        </MenuItem>
                    ))
                }
            </Menu>
        </Grid>
    )
}
