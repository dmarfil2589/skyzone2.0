import { useContext, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { Card, CardActions, CardContent, Collapse, Grid, List, ListItem, Typography } from '@mui/material';

import { ExpandCard } from '../ui';
import { FlightContext } from '../../context';
import { formatCurrency } from '../../helpers';

export const FlightCard = ({ city }) => {

    const { flights } = useContext( FlightContext );
    const [ expanded, setExpanded ] = useState(false);

    const { search } = useLocation();
    const userSearch = new URLSearchParams(search).get('search');    

    const currentFlights = useMemo( () => flights.filter( flight => flight.destiny.name === city ), [ flights, city ] );
    console.log(currentFlights);

    return (
        <>
            {
                currentFlights.length !== 0 && (
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardActions>
                                <ExpandCard
                                    text={ city }
                                    expanded={ expanded }
                                    handleExpanded={ () => setExpanded(!expanded) }
                                />
                            </CardActions>
                            <Collapse in={ expanded } timeout="auto" unmountOnExit>
                                <CardContent>
                                    <List>
                                        {
                                            currentFlights.map( flight => (
                                                <ListItem key={ flight._id }>
                                                    <Typography variant='subtitle2'>
                                                        { `Vuelo de ${ flight.origin.name } a ${city} - ${ formatCurrency( flight.price ) }` }
                                                    </Typography>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                )
            }
        </>
    )
}

ExpandCard.propTypes = {
    city: propTypes.string.isRequired,
};