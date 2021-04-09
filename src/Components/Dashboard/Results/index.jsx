import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// MODULES
import Chart from './Chart';
import Filters from './Filters';
import News from './News';
import Categories from './Categories';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#F1F1F3"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
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
    fixedHeight: {
        height: 250,
    },
    filterHeight: {
        height: 500
    },
    newsHeight: {
        height: "auto",
        marginTop: 20
    },
    charts: {
        height: 500
    },
}));

export default function Results() {
    const classes = useStyles();
    const [ showSentiment, setShowSentiment ] = useState(false)
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedHeightChart = clsx(classes.paper, classes.charts);
    const filterHeightPaper = clsx(classes.paper, classes.filterHeight);
    const newsHeightPaper = clsx(classes.paper, classes.newsHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={fixedHeightChart}>
                            <Chart 
                                showSentiment={showSentiment}
                                setShowSentiment={setShowSentiment}
                            />
                        </Paper>
                    </Grid>
                    {
                        showSentiment 
                        ?
                        <Grid item xs={12}>
                            <Paper className={fixedHeightChart}>
                                <Chart 
                                    showSentiment={showSentiment}
                                    setShowSentiment={setShowSentiment}
                                />
                            </Paper>
                        </Grid>
                        :
                        null
                    }
                    <Grid item xs={12} md={8} lg={8} spacing={3}>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                <Categories />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={newsHeightPaper}>
                                <News />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={newsHeightPaper}>
                                <News />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={newsHeightPaper}>
                                <News />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={newsHeightPaper}>
                                <News />
                            </Paper>
                        </Grid>

                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper className={filterHeightPaper}>
                            <Filters />
                        </Paper>
                    </Grid>
                
                </Grid>
            </Container>
            <Footer />
        </main>
    )
}