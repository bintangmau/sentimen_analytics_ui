import React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        backgroundColor: "black",
        margin: theme.spacing(3, 0, 2),
        color: "#3F51B5",   
    },
    title: {
        fontWeight: "bold"
    },
    formControl: {
        margin: theme.spacing(1),
        // minWidth: 300
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Language() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        Track only in selected language
                    </Typography>
                    <Typography>
                        We will collect mentions ONLY in the language you choose
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container>
                            <FormControl className={classes.formControl} xs={8} md={8} lg={8} fullWidth>
                                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                >
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={20}>Indonesian</MenuItem>
                                <MenuItem value={30}>Javanese</MenuItem>
                                </Select>
                            </FormControl>
                            <RoutePath to='/projects/results' style={{ textDecoration: "none" }} xs={4} >
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                    >
                                    Next
                                </Button>
                            </RoutePath>
                        </Grid>
                        <Grid container>
                        </Grid>
                        <Box mt={5}>
                        <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
    );
}