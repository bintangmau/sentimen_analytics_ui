import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "medium",
        color: "#4287f5"
    }
}));

export default function Title(props) {
    const classes = useStyles()
    return (
        <Typography component="h4" variant="h6" className={classes.title} gutterBottom s>
        {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};