import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import ShareIcon from '@material-ui/icons/Share';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ReplyIcon from '@material-ui/icons/Reply';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Tooltip from '@material-ui/core/Tooltip';

// COMPONENTS
import CircularScore from './CircularScore';

const useStyles = makeStyles((theme) => ({
    dateBox: {
        display: "flex"
    },
    date: {
        fontSize: "12px",
        marginLeft: 3,
    },
    lowerBox: {
        marginTop: 10  
    },
    formControl: {
        minWidth: 80,
    },
    selectEmpty: {
        marginTop: theme.spacing(-0.5),
        height: 28,
        fontSize: '12px'
    },
    selectLabel: {
        fontSize: '12px',
        marginTop: -15
    },
    menuItem: {
        fontSize: '12px'
    },
    contentBox: {
        marginTop: 20,
        color: "#707070"
    },
    footer: {
        backgroundColor: "#FAFAFA",
        marginTop: 15
    },
    footerIcon: {
        color: "#AFAFBF",
        fontSize: '16px'
    },
    footerCaption: {
        fontSize: "12px",
        marginLeft: 3,
    },
    footerFormControl: {
        marginTop: -15,
        minWidth: 80
    },
    footerLabel: {
        fontSize: '12px',
        color: "#AFAFBF",
    },
    selectLabelFooter: {
        height: 28,
        fontSize: '12px'
    }
}));

const FooterText = withStyles({
    root: {
        color: "#AFAFBF",
        fontSize: "12px",
        marginLeft: 2
    }
})(Typography);

export default function() {
    const classes = useStyles()
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            
            <Grid container>

                {/* ICON */}
                <Grid item xs>
                    <IconButton>
                        <InsertCommentIcon />
                    </IconButton>
                </Grid>

                <Grid item container xs={10}>
                    {/* TITLE  UPPER   */}
                    <Grid item container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={9}>
                            <Typography component="h1" variant="subtitle1">Ini merupakan Berita terbaru hari ini</Typography>
                        </Grid>
                        <Grid style={{ display: "flex" }} item lg={3}>
                            <EventNoteRoundedIcon 
                                className={classes.footerIcon}
                            />
                            <FooterText className={classes.date}>2021-04-06 07:04</FooterText>
                        </Grid>
                    </Grid>

                    {/* TITLE LOWER */}
                    <Grid item container justify="space-between" className={classes.lowerBox} spacing={2}>
                        <Grid item xs={6} sm={3} md={3} lg={3} style={{ display: "flex" }}>
                            <ShareIcon fontSize="small" color="primary" />
                            <Typography className={classes.date} color="primary">bintangm.co.id</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={3} style={{ display: "flex" }}>
                                <CircularScore />
                                <Typography className={classes.date} color="primary">Influencer Score</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={3}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel className={classes.selectLabel} id="demo-simple-select-outlined-label-01">Neutral</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label-01"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    onChange={handleChange}
                                    label="Age"
                                    labelWidth={10}
                                    className={classes.selectEmpty}
                                >
                                <MenuItem className={classes.menuItem} value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} value={10}>Ten</MenuItem>
                                <MenuItem className={classes.menuItem} value={20}>Twenty</MenuItem>
                                <MenuItem className={classes.menuItem} value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={3} style={{ display: "flex", marginTop: -5 }}>
                            <InsertChartIcon 
                                color="primary"
                            />
                            <Typography className={classes.date}>19.1M</Typography>
                        </Grid> 
                    </Grid>

                </Grid>

                {/* CONTENT */}
                <Grid item container xs={12} justify="space-between" className={classes.contentBox}>
                    <Typography>
                        JAKARTA - Sekretaris Jenderal (Sekjen) Partai Gerindra Ahmad Muzani 
                        menegaskan partai yang dipimpin oleh Prabowo Subianto, bukanlah partai musiman 
                        yang hanya muncul ketika ada pemilihan atau pentas demokrasi [...] \"Ini yang selalu 
                        di tegaskan oleh ketua Dewan pembina Prabowo Subianto,\" ujarnya
                    </Typography>
                </Grid>
                
                {/* FOOTER */}
                <Grid container item xs={12} className={classes.footer}>
                    
                    <Grid item style={{ display: "flex", alignItems: "center" }} xs={2} sm={1} md={2} lg={2}>
                        <Tooltip title="Visit">
                            <IconButton color="primary" size="medium">
                                <ReplyIcon
                                    className={classes.footerIcon}
                                />
                                <FooterText>Visit</FooterText>
                            </IconButton>
                        </Tooltip>
                    </Grid>


                    <Grid item style={{ display: "flex", alignItems: "center" }} xs={2} sm={1} md={2} lg={2}>
                        <Tooltip title="Tags">
                            <IconButton color="primary" size="medium">
                                <LocalOfferIcon 
                                    className={classes.footerIcon}
                                    />
                                <FooterText>Tags</FooterText>
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    <Grid item style={{ display: "flex", alignItems: "center" }} xs={2} sm={2} md={2} lg={2}>
                        <Tooltip title="Delete">
                            <IconButton color="primary" size="medium">
                                <DeleteIcon 
                                    className={classes.footerIcon}
                                    />
                                <FooterText>Delete</FooterText>
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    <Grid item style={{ display: "flex", alignItems: "center" }} xs={4} sm={3} md={3} lg={3}>
                        <Tooltip title="Add to PDF">
                            <IconButton color="primary" size="medium">
                                <AddBoxIcon 
                                    className={classes.footerIcon}
                                />
                                <FooterText>Add to PDF report</FooterText>
                            </IconButton>
                        </Tooltip>
                    </Grid>

                    <Grid item style={{ display: "flex", alignItems: "center" }} xs={2} sm={3} md={3} lg={2}>
                        <FormControl className={classes.footerFormControl}>
                            <InputLabel className={classes.footerLabel} id="demo-simple-select-outlined-label">More</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                onChange={handleChange}
                                label="Age"
                                labelWidth={10}
                                className={classes.footerLabel}
                            >
                            <MenuItem className={classes.menuItem} value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem className={classes.menuItem} value={10}>Ten</MenuItem>
                            <MenuItem className={classes.menuItem} value={20}>Twenty</MenuItem>
                            <MenuItem className={classes.menuItem} value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Grid>

        </div>
    )
}