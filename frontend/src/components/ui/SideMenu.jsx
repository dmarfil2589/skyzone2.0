import { useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';

import { Box, capitalize, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
/* import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'; */
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';

import { UIContext } from "../../context";

const APPNAME = process.env.REACT_APP_NAME;

export const SideMenu = () => {

    const { isMenuOpen, toogleSideMenu } = useContext( UIContext );

    return (
        <Drawer 
            anchor="right" 
            open={ isMenuOpen }
            onClose={ () => toogleSideMenu() }
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 1 }}>
                <List>
                    <ListSubheader sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        { capitalize(APPNAME) } Menu
                    </ListSubheader>
                    <Divider />

                    {/* <ListItem
                        button
                        onClick={ () => toogleSideMenu() }
                    >
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText primary='Ingresar' />
                    </ListItem> */}

                    <ListItem
                        button
                        component={ RouterLink }
                        to="/flights"
                        onClick={ () => toogleSideMenu() }
                    >
                        <ListItemIcon>
                            <AirplaneTicketOutlinedIcon  />
                        </ListItemIcon>

                        <ListItemText primary='Vuelos' />       
                    </ListItem>

                    <ListItem
                        button
                        component={ RouterLink }
                        to="/explore"
                        onClick={ () => toogleSideMenu() }
                    >
                        <ListItemIcon>
                            <PublicOutlinedIcon  />
                        </ListItemIcon>

                        <ListItemText primary='Explorar' />
                    </ListItem>

                    <ListItem
                        button
                        component={ RouterLink }
                        to="/business"
                        onClick={ () => toogleSideMenu() }
                    >
                        <ListItemIcon>
                            <BusinessOutlinedIcon  />
                        </ListItemIcon>

                        <ListItemText primary='Negocios' />       
                    </ListItem>

                    <ListItem
                        button
                        component={ RouterLink }
                        to="/services"
                        onClick={ () => toogleSideMenu() }
                    >
                        <ListItemIcon>
                            <RoomServiceOutlinedIcon  />
                        </ListItemIcon>

                        <ListItemText primary='Servicios' />       
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}
