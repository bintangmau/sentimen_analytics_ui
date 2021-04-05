import React from 'react';
import Title from '../Title';
import {
    Grid,
    Typography,
    IconButton
} from '@material-ui/core';
import {
    PublicRounded,
    Twitter,
    Instagram,
    Facebook,
    Message,
    YouTube
} from '@material-ui/icons';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxCategory: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    rows: {
        marginTop: "5px"
    },
    iconCategory: {
        fontSize: 30
    },
    captionCategory: {
        color: "#757575"
    }
}))
export default function Categories() {
    const classes = useStyles()

    return (
        <div>
            <Title>Categories</Title>
            <Grid container spacing={2} className={classes.rows}>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <PublicRounded 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>All</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Twitter 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Twitter</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Instagram 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Instagram</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Facebook 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Facebook</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Message 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>News</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <YouTube 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>YouTube</Typography>
                </Grid>
            </Grid>
        </div>
    )
}