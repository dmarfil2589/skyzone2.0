import propTypes from 'prop-types';
import { Button, capitalize, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

export const BusinessCardInfo = ({ location, business }) => {
    return (
        <Grid item xs={12} sm={4} md={3}>
            <Card>
                <CardHeader 
                    title={ capitalize( location.city ) }
                    subheader={ capitalize( location.country ) }
                />

                <CardMedia
                    component='img'
                    alt='image business'
                    height='200'
                    image={ business.image }
                />

                <CardContent>
                    <Typography gutterBottom variant='h6' component='div'>
                        { capitalize(business.name) }
                    </Typography>

                    <Typography align='justify' noWrap variant='body2' color='text.secondary'>
                        { business.description }
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

BusinessCardInfo.propTypes = {
    location: propTypes.exact({
        city: propTypes.string.isRequired,
        country: propTypes.string.isRequired
    }),
    business: propTypes.exact({
        name: propTypes.string.isRequired,
        description: propTypes.string.isRequired,
        image: propTypes.string.isRequired
    }),
}