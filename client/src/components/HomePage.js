import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LanguageContext from "../contexts/LanguageContext";

const useStyles = makeStyles(theme => ({
    container: {
        textAlign: 'center',
        margin: '50px auto',
    },
    button: {
        margin: theme.spacing(8),
        '&:hover': {
            color: 'white'
        }
    },
    typography: {
        margin: theme.spacing(2),
    }
}));

const SignUp = React.forwardRef((props, ref) => (
    <Link innerRef={ref} {...props} />
));

const HomePage = ({isAuthenticated}) => {
    const classes = useStyles();
    const {data} = useContext(LanguageContext);

    if(!data) return <div>Loading...</div>;

    const {title, text } = data;
    const btn = data['btn-sign'];

    return  !isAuthenticated ? (
         <Container
            className={classes.container}
            maxWidth={false}
         >
            <Typography
                variant="h2">
                {title}
            </Typography>
             <Typography
                 variant="h4"
                 className={classes.typography}>
                 {text}
             </Typography>
             <Button
                 size='large'
                 color="primary"
                 className={classes.button}
                 variant="contained"
                 component={SignUp}
                 to='/signup'
             >
                 {btn}
             </Button>
         </Container>
    ) : (
        <div>
            Home Page
        </div>
    )
};

export default HomePage;