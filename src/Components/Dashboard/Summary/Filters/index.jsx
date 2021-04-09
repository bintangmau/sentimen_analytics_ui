import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function Filters() {
    return (
        <Grid container>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={4}>
                <Button>
                    Days
                </Button>
                <Button>
                    Weeks
                </Button>
                <Button>
                    Months
                </Button>
            </Grid>
        </Grid>
    )
}