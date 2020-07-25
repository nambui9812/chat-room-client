import axios from 'axios';

import store from '../store';

import {
    //CHANNELS_LOADING,
    CHANNELS_LOADED,
    CHANNELS_LOADED_FAIL,
    SET_CHANNEL_ID,
    CLEAR_CURRENT_CHANNEL_ID,
    CLEAR_CHANNEL_REDUCER,
    CREATE_CHANNEL,
    CREATE_CHANNEL_FAIL,
    DELETE_CHANNEL,
    DELETE_CHANNEL_FAIL
} from './types';

// Load channels
export const loadChannels = (token, roomId) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .get(`/api/channels/room/${roomId}`, config)
        .then(res => {
            store.dispatch({
                type: CHANNELS_LOADED,
                payload: res.data.data.channels
            });
        })
        .catch(err => {
            store.dispatch({
                type: CHANNELS_LOADED_FAIL
            });
        })
    
};

// Set current channel id
export const setCurrentChannelId = (channelId) => {
    store.dispatch({
        type: SET_CHANNEL_ID,
        payload: channelId
    })
};

// Clear current channel id
export const clearCurrentChannelId = () => {
    store.dispatch({
        type: CLEAR_CURRENT_CHANNEL_ID
    });
};

// Create channel
export const createChannel = ({ token, roomId, name }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .post('/api/channels/create', { roomId, name }, config)
        .then(res => {
            store.dispatch({
                type: CREATE_CHANNEL,
                payload: res.data.data.channel
            });
        })
        .catch(err => {
            store.dispatch({
                type: CREATE_CHANNEL_FAIL
            });
        })
};

export const deleteChannel = ({ token, channelId }) => {
    const config = {
        headers: {
            'Authorization': token
        }
    };

    axios
        .delete(`/api/channels/delete/${channelId}`, config)
        .then(res => {
            store.dispatch({
                type: DELETE_CHANNEL,
                payload: channelId
            });
        })
        .catch(err => {
            store.dispatch({
                type: DELETE_CHANNEL_FAIL
            });
        })
};

// Clear
export const clearChannelReducer = () => {
    store.dispatch({
        type: CLEAR_CHANNEL_REDUCER
    });
};
