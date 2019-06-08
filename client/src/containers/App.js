import React, { useContext, useReducer } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from 'jwt-decode';
// import CssBaseline from '@material-ui/core/CssBaseline/index';

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Main";
// import useResources from "../services/useResources";
import { LanguageStore } from '../contexts/LanguageContext';
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import { userReducer } from "../store/reducers/currentUser";


const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {}
};


const App = () => {

    const [state, dispatch] = useReducer(userReducer, DEFAULT_STATE);

    if(localStorage.jwtToken) {
        setAuthorizationToken(localStorage.jwtToken);
        try {
            dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
        } catch (e) {
            dispatch(setCurrentUser({}))
        }
    }

    console.log(state);
    return (
        <Router>
            {/*<CssBaseline/>*/}
            <LanguageStore>
                <Header />
                <Main isAuthenticated={state.isAuthenticated}/>
                <Footer/>
            </LanguageStore>
        </Router>
    );
};

export default App;
