import {SET_CURRENT_USER} from "../actionTypes";

// const DEFAULT_STATE = {
//     isAuthenticated: false,
//     user: {}
// };

export const userReducer = (state, action ) => {
    if (action.type === SET_CURRENT_USER) {
        return {
            //turn empty object into false or if there are keys - true
            isAuthenticated: !!Object.keys(action.user).length,
            user: action.user
        };
    } else {
        return state;
    }
};