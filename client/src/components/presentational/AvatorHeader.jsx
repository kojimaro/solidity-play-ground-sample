import React from "react";
import PropTypes from "prop-types";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const AvatarHeader = props => {
    const {
        label,
        src,
        subheader,
        title
    } = props;

    return(
        <CardHeader
            avatar={<Avatar aria-label={label} src={src}/>}
            subheader={subheader}
            title={title}
        />
    );
}

AvatarHeader.propTypes = {
    label: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AvatarHeader;