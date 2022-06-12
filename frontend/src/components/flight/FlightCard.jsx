import { useContext, useMemo, useState } from 'react';
import propTypes from 'prop-types';
import { Card, CardActions, CardContent, Collapse, Grid, List, ListItem, Typography } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

import { ExpandCard } from '../ui';
import { FlightContext } from '../../context';
import { formatCurrency } from '../../helpers';

export const FlightCard = ({ city }) => {

    const { flights } = useContext( FlightContext );
    const [ expanded, setExpanded ] = useState(false);

    const currentFlights = useMemo( () => flights.filter( flight => flight.destiny.name === city ), [ flights, city ] );

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
                                    icon={ <FlightIcon /> }
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
    city: propTypes.string,
};