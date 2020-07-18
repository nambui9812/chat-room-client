import {
    //MESSAGES_LOADING,
    MESSAGES_LOADED,
    MESSAGES_LOADED_FAIL,
    SET_MESSAGE,
    SEND_MESSAGE,
    SEND_MESSAGE_FAIL,
    CLEAR_MESSAGE_REDUCER
} from '../actions/types';

const initialState = {
    currentMessage: '',
    messages: null
};

export default function MessageReducer(state = initialState, action) {
    switch(action.type) {
        case MESSAGES_LOADED:
            return {
                ...state,
                messages: action.payload
            };

        case SET_MESSAGE:
            return {
                ...state,
                currentMessage: action.payload
            };

        case SEND_MESSAGE:
            return {
                ...state,
                currentMessage: '',
                messages: [...state.messages, action.payload]
            };

        case SEND_MESSAGE_FAIL:
        case MESSAGES_LOADED_FAIL:
        case CLEAR_MESSAGE_REDUCER:
            return {
                ...state,
                currentMessage: '',
                messages: null
            };

        default:
            return state;
    }
}
