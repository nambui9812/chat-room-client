import {
    //CHANNELS_LOADING,
    CHANNELS_LOADED,
    CHANNELS_LOADED_FAIL,
    SET_CHANNEL_ID,
    CLEAR_CURRENT_CHANNEL_ID,
    CLEAR_CHANNEL_REDUCER
} from '../actions/types';

const initialSate = {
    channels: null,
    currentChannelId: null
};

export default function ChannelReducer(state = initialSate, action) {
    switch(action.type) {
        case CHANNELS_LOADED:
            return {
                ...state,
                channels: action.payload
            };

        case SET_CHANNEL_ID:
            return {
                ...state,
                currentChannelId: action.payload
            };

        case CLEAR_CURRENT_CHANNEL_ID:
            return {
                ...state,
                currentChannelId: null
            };

        case CHANNELS_LOADED_FAIL:
        case CLEAR_CHANNEL_REDUCER:
            return {
                ...state,
                channels: null,
                currentChannelId: null
            };

        default:
            return state;
    }
};
