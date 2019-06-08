import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles/index';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core/index';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderIcons from "../../components/HeaderIcons";
import LanguageContext  from "../../contexts/LanguageContext";
import useResource from "../../services/useResources";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontSize: '20px'
    },
}));

const SignIn = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
));

const Header = () => {
    const classes = useStyles();
    const {data} = useContext(LanguageContext);
    const logo = data ? data.logo : 'News';
    const btn = data ? data.btn : 'Log In';
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Link to='/' className={classes.title}>
                    {logo}
                </Link>
                <HeaderIcons />
                <Button
                    // variant="contained"
                    color="inherit"
                    component={SignIn}
                    to='/signin'
                >
                    {btn}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;