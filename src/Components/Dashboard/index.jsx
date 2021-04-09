import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

// MODULES
import Navbar from './Navbar';
import Drawer from './Drawer';
import Results from './Results';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#F1F1F3"
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const { url } = useRouteMatch();
    const [ open, setOpen ] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
            <Drawer open={open} handleDrawerClose={handleDrawerClose} />
            {/* <Footer /> */}

            <Switch>
                <Route exact path={`${url}`} component={Results} />
                <Route path={`${url}/summary`} component={Summary} />
            </Switch>

        </div>
    );
}