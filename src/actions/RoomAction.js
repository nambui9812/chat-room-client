import axios from 'axios';

import store from '../store';

import {
    //ROOMS_LOADING,
    ROOMS_LOADED,
    ROOMS_LOADED_FAIL,
    SET_ROOM_ID,
    CLEAR_CURRENT_ROOM_ID,
    CLEAR_ROOM_REDUCER,
    JOIN_ROOM,
    JOIN_ROOM_FAIL,
    CREATE_ROOM,
    CREATE_ROOM_FAIL,
    DELETE_ROOM,
    DELETE_ROOM_FAIL
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

// Join room
export const joinRoom = ({ token, roomId, name }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    }

    axios
        .post('/api/members/create', { roomId, name }, config)
        .then(res => {
            store.dispatch({
                type: JOIN_ROOM,
                payload: res.data.data.room
            });
        })
        .catch(err => {
            store.dispatch({
                type: JOIN_ROOM_FAIL
            });
        })
};

// Create room
export const createRoom = ({ token, adminName, name }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    }

    axios
        .post('/api/rooms/create', { adminName, name }, config)
        .then(res => {
            store.dispatch({
                type: CREATE_ROOM,
                payload: res.data.data.room
            });
        })
        .catch(err => {
            store.dispatch({
                type: CREATE_ROOM_FAIL
            });
        })
};

// Delete room
export const deleteRoom = ({ token, roomId }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .delete(`/api/rooms/delete/${roomId}`, config)
        .then(res => {
            store.dispatch({
                type: DELETE_ROOM,
                payload: roomId
            });
        })
        .catch(err => {
            store.dispatch({
                type: DELETE_ROOM_FAIL
            });
        })
}

// Clear
export const clearRoomReducer = () => {
    store.dispatch({
        type: CLEAR_ROOM_REDUCER
    });
};
