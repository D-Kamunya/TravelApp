import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
