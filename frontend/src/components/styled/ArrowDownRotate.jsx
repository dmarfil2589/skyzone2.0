import propTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const ArrowDownRotate = styled((props) => {
    const { ...other } = props;
    return (
        <>
            <KeyboardArrowDownIcon {...other} />
        </>
    );
})(({ theme, open }) => ({
    transform: !open ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

ArrowDownRotate.propTypes = {
    open: propTypes.bool.isRequired,
};