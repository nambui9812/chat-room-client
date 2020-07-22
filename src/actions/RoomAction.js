import axios from 'axios';

import store from '../store';

import {
    //ROOMS_LOADING,
    ROOMS_LOADED,
    ROOMS_LOADED_FAIL,
    SET_ROOM_ID,
    CLEAR_CURRENT_ROOM_ID,
    CLEAR_ROOM_REDUCER
} from './types';

// Load rooms
export const loadRooms = (token) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .get('/api/rooms/user/', config)
        .then(res => {
            store.dispatch({
                type: ROOMS_LOADED,
                payload: res.data.data.rooms
            });
        })
        .catch(err => {
            store.dispatch({
                type: ROOMS_LOADED_FAIL
            });
        })
    
};

// Set current room id
export const setCurrentRoomId = (roomId) => {
    store.dispatch({
        type: SET_ROOM_ID,
        payload: roomId
    });
};

// Clear current room id
export const clearCurrentRoomId = () => {
    store.dispatch({
        type: CLEAR_CURRENT_ROOM_ID
    });
};

// Clear
export const clearRoomReducer = () => {
    store.dispatch({
        type: CLEAR_ROOM_REDUCER
    });
};
