import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// MODULES
import Footer from '../Footer';
import Filters from './Filters';
import TabMentions from './TabMentions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#F1F1F3"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(3),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column'
    },
    filterHeight: {
        height: 100,
    },
    tabMentionsHeight: {
        height: 1000
    }
}));

export default function Summary() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.filterHeight);
    const tabMentionsHeightPaper = clsx(classes.paper, classes.tabMentionsHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>

                <Grid container spacing={3}>

                    {/* FILTERS */}
                    <Grid item  xs={12}>
                        <Paper className={fixedHeightPaper}>
                            <Filters />
                        </Paper>
                    </Grid>

                    {/* TAB MENTIONS */}
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <Paper className={tabMentionsHeightPaper}>
                            <TabMentions />
                        </Paper>
                    </Grid>

                </Grid>

            </Container>
            <Footer />
        </main>
    )
}