import React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

// MODULE
import Title from '../../Title';
import Datarow from './Datarow';

const temporaryData = [
    { id: 0, name: "Joko Widodo", mentions: 100, score: 46, created: "2021-04-05" },
    { id: 0, name: "Nasi Goreng", mentions: 100, score: 46, created: "2021-04-05" },
    { id: 0, name: "Tes Caru", mentions: 100, score: 46, created: "2021-04-05" }
]

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
        float: "right"
    },
    table: {
        marginTop: 10
    },
    scoreBox: {
        border: "16px solid #f3f3f3", 
        borderTop: "16px solid #3498db",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
    }
}));

export default function Orders() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Grid container>
            <Grid item xs={6}>
                <Title>Projects</Title>
            </Grid>
            <Grid xs={6}>
                <RoutePath 
                    to='/createkeyword' 
                    style={{ textDecoration: "none" }}
                    target="_blank"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        size="small"
                        >
                        Add new project
                    </Button>
                </RoutePath>
            </Grid>
        </Grid>
        <Table size="medium" className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Project Name</TableCell>
                    <TableCell align="center">New Mentions</TableCell>
                    <TableCell align="center">Presence Socre</TableCell>
                    <TableCell align="center">Created</TableCell>
                    <TableCell align="right">Settings</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {temporaryData.map((row) => (
                    <Datarow 
                        key={row.id}
                        name={row.name}
                        mentions={row.mentions}
                        created={row.created}
                        score={row.score}
                    />
                ))}
            </TableBody>
        </Table>
        <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
                See more projects
            </Link>
        </div>
        </React.Fragment>
    );
}