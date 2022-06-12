import propTypes from 'prop-types';

import { Card, CardContent, CardMedia, Typography, capitalize, Grid, CardActionArea } from "@mui/material";

export const CityCard = ({ city }) => {

    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card raised>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt={ city.name }
                        image={ city.image }
                        height='200'
                    />
                    <CardContent>
                        <Typography variant='body1'>
                            { capitalize( city.name ) }
                        </Typography>

                        {/* {
                            city.description && (
                                <Typography variant='body2'>
                                    { capitalize( city.description ) }
                                </Typography>
                            )
                        } */}
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
};

CityCard.propTypes = {
    city: propTypes.shape({
        name: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
        description: propTypes.string,
    }),
};