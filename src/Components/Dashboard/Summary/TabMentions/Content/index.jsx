import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Typography from '@material-ui/core/Typography';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    date: {
        fontSize: "12px",
        marginLeft: 4,
        float: "right"
    },
    dateIcon: {
        color: "#AFAFBF",
        fontSize: '16px',
        float: "right"
    },
    contentHeader: {
        fontWeight: "bold"
    }
}));

const FooterText = withStyles({
    root: {
        color: "#AFAFBF",
        fontSize: "12px",
        marginLeft: 2
    }
})(Typography);

export default function Content() {
    const classes = useStyles()
    return (
        <div>

            <Grid container>

                {/* VIDEO ICON */}
                <Grid item lg={2}>
                    <Tooltip title="Play video">
                        <IconButton size="large">
                            <PlayCircleFilledIcon
                                
                                />
                        </IconButton>
                    </Tooltip>
                </Grid>

                {/* HEADER */}
                <Grid 
                    item 
                    container 
                    lg={10} 
                    spacing={1} 
                    justify="space-between"  
                    alignItems="center"
                    >
                    <Grid item xs={9} sm={12} md={12} lg={9}>
                        <Typography
                            className={classes.contentHeader}
                            >
                            Ini adalah judul dari sebuah berita
                        </Typography>
                    </Grid>
                    <Grid item style={{ display: "flex" }} xs={4} sm={4} md={4} lg={3}>
                        <EventNoteRoundedIcon 
                            className={classes.dateIcon}
                            />
                        <FooterText className={classes.date}>2021-04-06</FooterText>
                    </Grid>
                    <Grid>
                        <ShareIcon fontSize="small" color="primary" />
                        <Typography className={classes.date} color="primary">tiktok.com</Typography>
                    </Grid>

                </Grid>

                {/* CAPTION */}
                <Grid item lg={12} style={{ marginTop: 10 }} >
                <Typography variant="body2" gutterBottom>
                    #greenscreenvideo #viral #fyp #foryoupage #defenseminister #minister #indonesia #prabowosubianto
                </Typography>
                </Grid>

            </Grid>

                <Divider 
                    style={{
                        marginTop: 5,
                        marginBottom: 15
                    }}
                    />
        </div>
    )
}