import axios from 'axios';

import store from '../store';

import {
    //MESSAGES_LOADING,
    MESSAGES_LOADED,
    MESSAGES_LOADED_FAIL,
    SET_MESSAGE,
    SEND_MESSAGE,
    SEND_MESSAGE_FAIL,
    CLEAR_MESSAGE_REDUCER
} from './types';

import socket from '../socket';

socket.on('message', message => {
    store.dispatch({
        type: SEND_MESSAGE,
        payload: message
    });
});

// Load messages
export const loadMessages = (token, channelId) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .get(`/api/messages/channel/${channelId}`, config)
        .then(res => {
            store.dispatch({
                type: MESSAGES_LOADED,
                payload: res.data.data
            });
        })
        .catch(err => {
            store.dispatch({
                type: MESSAGES_LOADED_FAIL
            });
        })
};

// Set message
export const setMessage = (message) => {
    store.dispatch({
        type: SET_MESSAGE,
        payload: message
    })
};

export const sendMessage = ({ token, roomId, channelId, content }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    const body = {
        roomId,
        channelId,
        content
    };

    axios
        .post('/api/messages/create', body, config)
        .catch(err => {
            console.log(err.response.data.messages);
            store.dispatch({
                type: SEND_MESSAGE_FAIL
            });
        })
};

// Clear
export const clearMessageReducer = () => {
    store.dispatch({
        type: CLEAR_MESSAGE_REDUCER
    });
};
