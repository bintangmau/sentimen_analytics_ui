import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return (
        <AppBar position="static" style={{ backgroundColor: "black" }}>
            <Container maxWidth="md">
                <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2021 Sentiment Emosi
                </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}