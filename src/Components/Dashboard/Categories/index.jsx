import React from 'react';
import Title from '../../Title';
import {
    Grid,
    Typography,
    IconButton,
    Tooltip,
    FormControl,
    MenuItem,
    Select,
    Button,
    TextField
} from '@material-ui/core';
import {
    PublicRounded,
    Twitter,
    Instagram,
    Facebook,
    Message,
    YouTube,
    SortRounded as SortIcon,
    Search as SearchIcon
} from '@material-ui/icons';
import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    boxCategory: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    rows: {
        marginTop: "5px"
    },
    iconCategory: {
        fontSize: 30
    },
    captionCategory: {
        color: "#757575"
    },
    filterBox: {
        marginTop: 30
    },
    searcBtn: {
        [theme.breakpoints.down("md")]: {
            // paddingLeft: 8,
            // paddingRight: 8,
            "& .MuiButton-startIcon": {
                margin: 0,
                // height: "100%",
            }
        }
    },
    searchBtnText: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }
}))
export default function Categories() {
    const classes = useStyles()
    const [ sortType, setSortType ] = React.useState()
    const [ searchKey, setSearchKey ] = React.useState('')

    const handleChange = (event) => {
        setSortType(event.target.value);
    };

    return (
        <div>

            <Title>Categories</Title>
            <Grid container spacing={2} className={classes.rows}>
                <Grid item className={classes.boxCategory} xs={2}>
                    <Tooltip title="All">
                        <IconButton>
                            <PublicRounded 
                                className={classes.iconCategory}
                                />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="caption" className={classes.captionCategory}>All</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Twitter 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Twitter</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Instagram 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Instagram</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Facebook 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>Facebook</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <Message 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>News</Typography>
                </Grid>
                <Grid item className={classes.boxCategory} xs={2}>
                    <IconButton>
                        <YouTube 
                            className={classes.iconCategory}
                        />
                    </IconButton>
                    <Typography variant="caption" className={classes.captionCategory}>YouTube</Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.filterBox} spacing={2}>
                <Grid item xs={4}>
                    <FormControl size="small" variant="outlined" xs={8} md={8} lg={8} fullWidth>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={sortType}
                            onChange={handleChange}
                            displayEmpty={true}
                            IconComponent={() => (
                                <SortIcon
                                    color="primary"
                                />
                            )}>
                        <MenuItem value={0}>Recent first</MenuItem>
                        <MenuItem value={1}>Popular first</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={1}> 
                        <Grid item xs ={9}>
                            <form noValidate >
                                <TextField 
                                    size="small"
                                    id="outlined-basic" 
                                    label="Search in mentions" 
                                    variant="outlined" 
                                    fullWidth
                                />
                            </form>
                        </Grid>
                        <Grid item xs={3}>
                            {/* <IconButton
                                // variant="contained"
                                color="primary"
                            >
                                <SearchIcon />
                            </IconButton>
                             */}
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<SearchIcon />}
                                fullWidth
                                className={classes.searcBtn}
                            >
                                <span className={classes.searchBtnText}>Search</span>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}