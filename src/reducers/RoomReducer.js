import {
    //ROOMS_LOADING,
    ROOMS_LOADED,
    ROOMS_LOADED_FAIL
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

        case ROOMS_LOADED_FAIL:
            return {
                ...state,
                rooms: null,
                currentRoomId: null
            };

        default:
            return state;
    }
};
