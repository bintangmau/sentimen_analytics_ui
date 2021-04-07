import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import ShareIcon from '@material-ui/icons/Share';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        // margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

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
                    <Grid item container>
                        <Grid item lg={9}>
                            <Typography component="h1" variant="subtitle1">Ini merupakan Berita terbaru hari ini</Typography>
                        </Grid>
                        <Grid item lg={3}>
                            <div style={{ display: "flex" }}>
                                <EventNoteRoundedIcon fontSize="small" color="primary" />
                                <Typography className={classes.date}>2021-04-06 07:04</Typography>
                            </div>
                        </Grid>
                    </Grid>

                    {/* TITLE LOWER */}
                    <Grid item container className={classes.lowerBox}>
                        <Grid item lg={3}>
                            <div style={{ display: "flex" }}>
                                <ShareIcon fontSize="small" color="primary" />
                                <Typography className={classes.date} color="primary">bintangm.co.id</Typography>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                            <div style={{ display: "flex" }}>
                                <CircularScore />
                                <Typography className={classes.date} color="primary">Influencer Score</Typography>
                            </div>
                        </Grid>
                        <Grid item lg={3}>
                        <FormControl variant="outlined" size="small" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item lg={3}>
                            normal
                        </Grid> 
                    </Grid>

                </Grid>

            </Grid>

        </div>
    )
}