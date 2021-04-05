import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ForumIcon from '@material-ui/icons/Forum';
import TimelineIcon from '@material-ui/icons/Timeline';
import EmailIcon from '@material-ui/icons/Email';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ImageIcon from '@material-ui/icons/Image';

export const mainListItems = (
    <div>
        <ListItem button>
        <ListItemIcon>
            <ForumIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Mentions" />
        </ListItem>
        <ListItem button>
        <ListItemIcon>
            <AssignmentIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Summary" />
        </ListItem>
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
    </div>
);

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