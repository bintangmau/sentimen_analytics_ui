import React from 'react';
import {
    Grid,
    Button,
    Typography
} from '@material-ui/core' 
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { numberOfMentionsWeeks } from '../TemporaryData';

const useStyles = makeStyles((theme) => ({
    responsiveContainerBox: {
        marginTop: "10px"
    },
    showSentimentBtn: {
        [theme.breakpoints.down("md")]: {
            marginBottom: 10
        },
    },
    showSentimentBtnTime: {
        marginRight: 2
    },
    filterTimeBox: {
        display: "flex",
        flexDirection: "space-between"
    },
    chartTypeBox: {
        display: "flex",
        flexDirection: "space-between"
    },
    chartType: {
        width: "20px",
        height: "3px",
        backgroundColor: "red",
        marginTop: 10,
        marginRight: 10
    }
}))

export default function Chart(props) {
    const theme = useTheme();   
    const classes = useStyles()
    const { showSentiment, setShowSentiment } = props
    const chartTypes = [
        { name: "Number of mentions", color: "red" },
        { name: "Social media reach", color: "blue" },
        { name: "Non social reach", color: "green" },
    ]

    const handleShowSentiment = () => {
        setShowSentiment(!showSentiment)
    }

    const renderChartTypes = () => {
        return chartTypes.map((val, idx) => {
            return (
                <Grid item lg={2} md={4} sm={12} xs={12} direction="row" className={classes.chartTypeBox}>
                    <div style={{ display: "flex" }}>
                        <div className={classes.chartType} style={{ backgroundColor: `${val.color}` }}></div>
                        <Typography style={{ fontSize: "small" }}>{val.name}</Typography>
                    </div>
                </Grid>
            )
        })
    }
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6} md={9} lg={9}>
                    <Button 
                        variant="outlined"
                        size="small"
                        className={classes.showSentimentBtn}
                        onClick={handleShowSentiment}
                    >
                        { showSentiment ? "Hide Sentiment" : "Show Sentiment" }
                    </Button>
                </Grid>
                <Grid item xs={6} md={3} lg={3} className={classes.filterTimeBox}>
                    <Button 
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Days
                    </Button>
                    <Button 
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Weeks
                    </Button>
                    <Button 
                        size="small"
                        className={classes.showSentimentBtnTime}
                    >
                        Months
                    </Button>
                </Grid>
            </Grid>
            <div style={{ marginTop: "15px" }}/>
            <Grid container>
                {renderChartTypes()}
            </Grid>
            <div style={{ marginTop: "15px" }}/>
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