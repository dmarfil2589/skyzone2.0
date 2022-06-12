import { useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Typography, capitalize, Toolbar, Link, Box, Button } from "@mui/material"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from "../../context";


const APPNAME = process.env.REACT_APP_NAME;

export const Navbar = () => {

    const { toogleSideMenu } = useContext( UIContext );


    return (
        <AppBar color='kayak'>
            <Toolbar>
                <Link display='flex' component={ RouterLink } to='/' alignItems='center'>
                    <TravelExploreIcon fontSize="large" />
                    
                    <Typography variant='h5' ml={1}>
                        { capitalize(APPNAME) }
                    </Typography>
                </Link>

                <Box flex='1' />

                <Button color='inherit' onClick={ () => toogleSideMenu() }>
                    <MenuOutlinedIcon fontSize="large" />
                </Button>
            </Toolbar>
        </AppBar>
    )
}
