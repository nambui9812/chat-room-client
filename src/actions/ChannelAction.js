import axios from 'axios';

import store from '../store';

import {
    //CHANNELS_LOADING,
    CHANNELS_LOADED,
    CHANNELS_LOADED_FAIL,
    SET_CHANNEL_ID
} from './types';

// Load channels
export const loadChannels = (userId, roomId) => {
    const config = {
        headers: {
            'Authorization': userId
        }
    };

    axios
        .get(`/api/channels/room/${roomId}`, config)
        .then(res => {
            store.dispatch({
                type: CHANNELS_LOADED,
                payload: res.data.data
            });
        })
        .catch(err => {
            console.log(err);
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
