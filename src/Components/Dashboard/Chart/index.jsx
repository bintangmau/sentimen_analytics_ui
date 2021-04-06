import React, { useState } from 'react';
import {
    Grid,
    Button
} from '@material-ui/core' 
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../../Title';
import { 
    numberOfMentionsDays,
    numberOfMentionsWeeks,
    numberOfMentionsMonths
} from '../TemporaryData';

const useStyles = makeStyles((theme) => ({
    responsiveContainerBox: {
        marginTop: "10px"
    },
    showSentimentBtn: {
        // color: "#4287f5"
    },
    showSentimentBtnTime: {
        marginRight: "5px"
    },
    filterTimeBox: {
        display: "flex",
        flexDirection: "space-between"
    }
}))

export default function Chart(props) {
    const theme = useTheme();   
    const classes = useStyles()
    const { showSentiment, setShowSentiment } = props

    const handleShowSentiment = () => {
        setShowSentiment(!showSentiment)
    }
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} md={12} lg={8}>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtn}
                        onClick={handleShowSentiment}
                    >
                        { showSentiment ? "Hide Sentiment" : "Show Sentiment" }
                    </Button>
                </Grid>
                <Grid item spacing={10} xs={12} md={12} lg={4} className={classes.filterTimeBox}>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Days
                    </Button>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Weeks
                    </Button>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Months
                    </Button>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtn}
                    >
                        Last 30 Days
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: "15px" }}/>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                    data={numberOfMentionsWeeks}
                    height={200}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Sales ($)
                        </Label>
                    </YAxis>
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Sales ($)
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke="blue" dot={false} />
                    <Line type="monotone" dataKey="amount2" stroke="red" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}