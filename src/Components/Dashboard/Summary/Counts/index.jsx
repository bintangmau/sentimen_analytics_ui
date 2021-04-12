import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: "11px",
        fontWeight: "bold",
        color: "#B7BFC9"
    },
    content: {
        fontSize: "18px",
        fontWeight: "bold"
    },
    smallContent: {
        fontSize: "11px",
        color: "#3F51B5"
    },
    headerBox: {
        display: "flex",
        marginBottom: 15
    }
}))

export default function() {
    const classes = useStyles()
    return (
        <div>

            <div className={classes.headerBox}>
                <BookmarkIcon 
                    color="primary"
                    style={{
                        marginRight: 5
                    }}
                />
                <Typography>SUMMARY</Typography>
            </div>

            <Grid container spacing={1}>

                <Grid item lg={2}>
                    <span className={classes.title}>MENTIONS</span> <br />
                    <span className={classes.content}>2761</span> <br />
                    <span className={classes.smallContent}>+5781(+895%)</span>
                </Grid>

                <Grid item lg={2}>
                    <span className={classes.title}>SM&nbsp;SEARCH</span> <br />
                    <span className={classes.content}>2761</span> <br />
                    <span className={classes.smallContent}>+5781(+895%)</span>
                </Grid>

                <Grid item lg={2}>
                    <span className={classes.title}>INTERACTIONS</span> <br />
                    <span className={classes.content}>2761</span> <br />
                    <span className={classes.smallContent}>+5781(+895%)</span>
                </Grid>

                <Grid item lg={2}>
                    <span className={classes.title}>POSITIVE</span> <br />
                    <span className={classes.content}>2761</span> <br />
                    <span className={classes.smallContent}>+5781(+895%)</span>
                </Grid>

                <Grid item lg={2}>
                    <span className={classes.title}>NEGATIVE</span> <br />
                    <span className={classes.content}>2761</span> <br />
                    <span className={classes.smallContent}>+5781(+895%)</span>
                </Grid>

            </Grid>
        </div>
    )
}