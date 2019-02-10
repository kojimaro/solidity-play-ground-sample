import React from "react";
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const TextForm = ({label, type, id, value, onChange, variant, margin}) => {
    return(
        <TextField
            type={type}
            label={label}
            id={id}
            value={value}
            onChange={onChange}
            variant={variant}
            margin={margin}
            fullWidth={true}
        />
    );
}

TextForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired
}

export default TextForm;