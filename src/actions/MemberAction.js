import axios from 'axios';

import store from '../store';

import {
    //MEMBERS_LOADING,
    MEMBERS_LOADED,
    MEMBERS_LOADED_FAIL,
    CLEAR_MEMBER_REDUCER
} from './types';

// Load rooms
export const loadMembers = (token, roomId) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .get(`/api/members/room/${roomId}`, config)
        .then(res => {
            store.dispatch({
                type: MEMBERS_LOADED,
                payload: res.data.data.members
            });
        })
        .catch(err => {
            store.dispatch({
                type: MEMBERS_LOADED_FAIL
            });
        })
    
};

// Clear
export const clearMemberReducer = () => {
    store.dispatch({
        type: CLEAR_MEMBER_REDUCER
    });
};
