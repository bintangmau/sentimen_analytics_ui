import React from 'react';
import { Link as RoutePath } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function Datarow(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const DialogComponent = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure to delete this project?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        After the project is deleted you cannot return it again, unless you create a new project.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    return (
        <TableRow key={props.id}>
            <TableCell style={{ color: "#3F51B5" }}>
                <RoutePath 
                    to='/projects/results' 
                    target="_blank"
                    style={{ textDecoration: "none", color: "#3F51B5" }}
                >
                    {props.name}
                </RoutePath>
            </TableCell>
            <TableCell align="center">{`> ${props.mentions}`}</TableCell>
            <TableCell align="center">
                {props.score}
            </TableCell>
            <TableCell align="center">{props.created}</TableCell>
            <TableCell align="right">
                <Tooltip title="Edit">
                    <IconButton color="primary" size="medium">
                        <CreateIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton color="primary" size="medium" onClick={handleClickOpen}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <DialogComponent />
            </TableCell>
        </TableRow>
    )
}