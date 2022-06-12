import propTypes from 'prop-types';
import { IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, text, ...other } = props;
    return (
        <>
            <Typography>
                Vuelos a { text }
            </Typography>
            <IconButton {...other} />
        </>
    );
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

export const ExpandCard = ({ text, expanded, handleExpanded }) => {

    return (
        <ExpandMore
            expand={ expanded }
            onClick={ handleExpanded }
            aria-expanded={ expanded }
            aria-label="show more"
            text={ text }
        >
            <ExpandMoreIcon />
        </ExpandMore>
    )
}


ExpandCard.propTypes = {
    text: propTypes.string.isRequired,
    expanded: propTypes.bool.isRequired,
    handleExpanded: propTypes.func.isRequired
};