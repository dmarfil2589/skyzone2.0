import propTypes from 'prop-types';
import { Button, capitalize, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

export const ServiceCardInfo = ({ location, business, service }) => {
    return (
        <Grid item xs={12} sm={4} md={3}>
            <Card>
                <CardHeader 
                    title={ capitalize( business ) }
                    subheader={ `${capitalize( location.city )} - ${capitalize( location.country )}` }
                />

                <CardMedia
                    component='img'
                    alt='image business'
                    height='200'
                    image={ service.image }
                />

                <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                        { capitalize(service.name) }
                    </Typography>

                    <Typography align='justify' noWrap variant='body2' color='text.secondary'>
                        { service.description }
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size='small'>
                        Ver mas
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

ServiceCardInfo.propTypes = {
    business: propTypes.string.isRequired,
    location: propTypes.exact({
        city: propTypes.string.isRequired,
        country: propTypes.string.isRequired
    }),
    service: propTypes.exact({
        name: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        image: propTypes.string.isRequired
    }),
}