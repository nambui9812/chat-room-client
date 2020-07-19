import {
    //ROOMS_LOADING,
    ROOMS_LOADED,
    ROOMS_LOADED_FAIL,
    SET_ROOM_ID,
    CLEAR_CURRENT_ROOM_ID,
    CLEAR_ROOM_REDUCER
} from '../actions/types'

const initialState = {
    rooms: null,
    currentRoomId: null
};

export default function RoomReducer(state = initialState, action) {
    switch(action.type) {
        case ROOMS_LOADED:
            return {
                ...state,
                rooms: action.payload
            };

        case SET_ROOM_ID:
            return {
                ...state,
                currentRoomId: action.payload
            };
        
        case CLEAR_CURRENT_ROOM_ID:
            return {
                ...state,
                currentRoomId: null
            }

        case ROOMS_LOADED_FAIL:
        case CLEAR_ROOM_REDUCER:
            return {
                ...state,
                rooms: null,
                currentRoomId: null
            };

        default:
            return state;
    }
};
