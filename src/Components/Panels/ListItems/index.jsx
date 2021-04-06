import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Divider from '@material-ui/core/Divider';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                {/* <BookmarkIcon color="primary"/> */}
            </ListItemIcon>
            <ListItemText primary="Projects" />
        </ListItem>
        <Divider />
        <ListItem button>
            <ListItemIcon>
            <BookmarkIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Joko Widodo" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BookmarkIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Nasi Goreng" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BookmarkIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Tes Caru" />
        </ListItem>
    </div>
);
