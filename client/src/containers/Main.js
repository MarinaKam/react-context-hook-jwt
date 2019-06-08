import React, { useContext, useEffect, useReducer } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {Container, makeStyles} from '@material-ui/core';
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import { authUser } from "../store/actions/auth";
import AuthForm from "../components/AuthForm";
import LanguageContext from "../contexts/LanguageContext";

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: '20px',
        paddingBottom: '20px'
    }
}));

const Main = ({isAuthenticated}) => {
    const classes = useStyles();
    const {data} = useContext(LanguageContext);
    if (!data) return <div>Loading...</div>;
    return (
        <Container
            className={classes.container}
            component='main'
            maxWidth={false}>
            <Switch>
                <Route exact path='/' render={props => <HomePage {...props} isAuthenticated={isAuthenticated}/>}/>
                <Route
                    exact
                    path='/signin'
                    render={ props => <AuthForm
                        onAuth={ authUser }
                        btnText={data.btn}
                        heading={data['text2']}
                        {...props}
                    />
                    }
                />
                <Route
                    exact
                    path='/signup'
                    render={ props => <AuthForm
                        signUp
                        onAuth={ authUser }
                        btnText={data['btn-sign']}
                        heading={data['title2']}
                        {...props}
                    />
                    }
                />
            </Switch>

        </Container>
    )
};

export default withRouter(Main);