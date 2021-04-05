import React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
    }
}));

export default function Keyword() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        Create Keyword 
                    </Typography>
                    <Typography>
                        Enter brand, competitor or hashtag to monitor
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Some keywords"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <RoutePath to='/selectlanguange' style={{ textDecoration: "none" }}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                                >
                                Search
                            </Button>
                        </RoutePath>
                        <Grid container>
                        </Grid>
                        <Box mt={5}>
                        <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}