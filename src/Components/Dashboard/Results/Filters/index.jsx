import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';

// COMPONENTS
import Title from '../../Title';
import TabSwitcher from '../TabSwithcer';
import FilterTitle from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    divider: {
        marginTop: 15,
        marginBottom: 15
    },
    sliderBox: {
        display: "flex",
        justifyContent: "center",
        fontSize: "5px"
    },
    slider: {
        width: "90%"
    },
    spacer: {
        marginTop: 15
    }
});

export default function Filters() {
    const classes = useStyles();
    const sentimentFilters = [
        {
            value: 0,
            label: "Negative"
        },
        {
            value: 10,
            label: "All"
        },
        {
            value: 20,
            label: "Positive"
        }
    ]
    const influencerScores = [
        {
            value: 1,
            label: "1"
        },
        {
            value: 2,
            label: "2"
        },
        {
            value: 3,
            label: "3"
        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 5,
            label: "5"
        },
        {
            value: 6,
            label: "6"
        },
        {
            value: 7,
            label: "7"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 9,
            label: "9"
        },
        {
            value: 10,
            label: "10"
        },
    ]
    function valuetext(value) {
        return `${value}adsda°C`;
    }
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6}>
                    <Title>Filters</Title>
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="outlined"
                        size="small"
                        style={{ 
                            float: "right"
                        }}
                    >
                        Clear filters
                    </Button>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            
            {/* SENTIMENT FILTER */}
            <FilterTitle>SENTIMENT FILTER</FilterTitle>
            <div className={classes.spacer}></div>
            <div className={classes.sliderBox}>
                <Slider
                    className={classes.slider}
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={sentimentFilters}
                    min={0}
                    max={20}
                />
            </div>
            <Divider className={classes.divider} />

            {/* FILTER BY IMPORTANCE */}
            <FilterTitle>FILTER BY IMPORTANCE</FilterTitle>
            <div className={classes.spacer}></div>
            <TabSwitcher />
            <Divider className={classes.divider} />

            {/* FILTER BY INFLUENCER SCORE */}
            <FilterTitle>FILTER BY INFLUENCER SCORE</FilterTitle>
            <div className={classes.spacer}></div>
            <div className={classes.sliderBox}>
                <Slider
                    className={classes.slider}
                    aria-labelledby="discrete-slider-custom"
                    valueLabelDisplay="auto"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    step={1}
                    marks={influencerScores}
                    min={1}
                    max={10}
                />
            </div>

        </React.Fragment>
    );
}