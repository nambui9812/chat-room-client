import axios from 'axios';

import store from '../store';

import {
    //CHANNELS_LOADING,
    CHANNELS_LOADED,
    CHANNELS_LOADED_FAIL,
    SET_CHANNEL_ID,
    CLEAR_CURRENT_CHANNEL_ID,
    CLEAR_CHANNEL_REDUCER
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

// Clear current channal id
export const clearCurrentChannelId = () => {
    store.dispatch({
        type: CLEAR_CURRENT_CHANNEL_ID
    });
};

// Clear
export const clearChannelReducer = () => {
    store.dispatch({
        type: CLEAR_CHANNEL_REDUCER
    });
};
