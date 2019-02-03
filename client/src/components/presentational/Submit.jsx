import React from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';

const Submit = props => {
    const {
        variant,
        color,
        label,
        onClick,
        fullWidth
    } = props;

    return(
        <Button
            type="submit"
            variant={variant}
            color={color}
            onClick={onClick}
            fullWidth={fullWidth}
        >
        {label}
        </Button>
    );
}

Submit.propTypes = {
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    fullWidth: PropTypes.bool.isRequired
}

export default Submit;