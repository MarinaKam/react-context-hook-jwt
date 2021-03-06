import { apiCall, setTokenHeader } from '../../services/apis';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    user
});

export const setAuthorizationToken = token => setTokenHeader(token);

export const logout = () => dispatch => {
    localStorage.clear();
    setTokenHeader(false);
    dispatch(setCurrentUser({}));
};

export const authUser = (type, userData) => dispatch => {
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
        return apiCall("post", `/auth/${type}`, userData)
            .then(({ token, ...user }) => {
                localStorage.setItem("jwtToken", token);
                setTokenHeader(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve(); // indicate that the API call succeeded
            })
            .catch(err => {
                dispatch(addError(err.message));
                reject(); // indicate the API call failed
            });
    });
};