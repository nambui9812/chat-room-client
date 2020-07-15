// Require packages
import axios from 'axios';

import store from '../store';

import {
    USER_LOADED,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR
} from './types';

// Load user
export const loadUser = (token) => {
    const config = {
        headers: {
            "Authorization": token
        }
    };

    // Send request
    axios
        .get('/api/users/user', config)
        .then(res => {
            store.dispatch({
                type: USER_LOADED,
                payload: res.data.data
            })
        })
        .catch(err => {
            store.dispatch({
                type: AUTH_ERROR
            });
        })
};

// Register
export const register = ({ name, username, password }) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Body
    const body = JSON.stringify({ name, username, password });
    
    // Send request
    axios
        .post('/api/users/sign-up', body, config)
        .then(res => {
            store.dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.data
            });
        })
        .catch(err => {
            alert(err.response.data.messages)
            store.dispatch({
                type: REGISTER_FAIL
            });
        })
};

// Login
export const login = ({ username, password }) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Body
    const body = JSON.stringify({ username, password });
    
    // Send request
    axios
        .post('/api/users/sign-in', body, config)
        .then(res => {
            store.dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.data
            });
        })
        .catch(err => {
            alert(err.response.data.messages)
            store.dispatch({
                type: LOGIN_FAIL
            });
        })
};

export const logout = () => {
    store.dispatch({
        type: LOGOUT_SUCCESS
    });
};
