import propTypes from 'prop-types';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, icon, text, ...other } = props;
    return (
        <Grid container item alignItems='center' xs={12}>
            { icon }

            <Typography ml={2}>
                Vuelos a { text }
            </Typography>

            <Box flex='1' />

            <IconButton {...other} />
        </Grid>
    );
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

export const ExpandCard = ({ text, icon, expanded, handleExpanded }) => {

    return (
        <ExpandMore
            expand={ expanded }
            onClick={ handleExpanded }
            aria-expanded={ expanded }
            aria-label="show more"
            text={ text }
            icon={ icon }
        >
            <ExpandMoreIcon />
        </ExpandMore>
    )
}


ExpandCard.propTypes = {
    icon: propTypes.element.isRequired,
    text: propTypes.string.isRequired,
    expanded: propTypes.bool.isRequired,
    handleExpanded: propTypes.func.isRequired
};