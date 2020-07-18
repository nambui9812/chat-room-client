import {
    USER_LOADED,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR,
    CLEAR_USER_REDUCER
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user: null
};

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case USER_LOADED:
            return {
                ...state,
                user: action.payload
            };
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload
            };

        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case CLEAR_USER_REDUCER:
            return {
                ...state,
                token: null,
                user: null
            };

        default:
            return state;
    }
}
