import propTypes from 'prop-types';
import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, capitalize, Grid, CardActionArea } from "@mui/material";
import { FilterContext} from '../../context';
export const CityCard = ({ city }) => {
    const {updateDestiny} = useContext( FilterContext );
    const navigation = useNavigate();

    const setCity = () => {    
        updateDestiny([city._id]);
        navigation(`/flights`);
    };

    return (
        ! ["caracas", "madrid", "roma", "rio de janeiro", "buenos aires", "cordoba"].includes(city.name) &&
        <Grid item xs={6} sm={4} md={3} onClick={ () => setCity([city._id])}>
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