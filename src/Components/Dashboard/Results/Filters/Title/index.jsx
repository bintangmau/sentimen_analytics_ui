import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export default function Title(props) {
    return (
        <Grid container>
            <Grid item xs={6}> 
                <Typography component="p" variant="p" >
                    {props.children}
                </Typography>
            </Grid>
            <Grid item xs={6}> 
                <HelpOutlineIcon 
                    style={{ 
                        float: "right"
                    }}
                />
            </Grid>
        </Grid>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};