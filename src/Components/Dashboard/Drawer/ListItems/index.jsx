import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ForumIcon from '@material-ui/icons/Forum';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';
import { Link, useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#F1F1F3"
    },
    drawerLink: {
        textDecoration: "none",
        color: "white"
    }
}));

export const MainListItems = () => {
    const classes = useStyles();
    const { url } = useRouteMatch();

    return (
        <List>
        <Link to={`${url}`} className={classes.drawerLink}>
            <ListItem button>
                <ListItemIcon>
                    <ForumIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Mentions" />
            </ListItem>
        </Link>
        <Link to={`${url}/summary`} className={classes.drawerLink}>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Summary" />
            </ListItem>
        </Link>
        <ListItem button>
        <ListItemIcon>
                <TimelineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                <BarChartIcon color="primary"/>
                </ListItemIcon>
                <ListItemText primary="Sources" />
                </ListItem>
                <ListItem button>
                <ListItemIcon>
                <LayersIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Comparison" />
                </ListItem>
        </List>
        )
};
            
export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
        <ListItemIcon>
            <EmailIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Email Reports" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <PictureAsPdfIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="PDF Report" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <ImageIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Infographic" />
        </ListItem>
    </div>
);