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

        case JOIN_ROOM:
            return {
                ...state,
                rooms: [ ...state.rooms, action.payload ]
            };

        case CREATE_ROOM:
            return {
                ...state,
                rooms: [ ...state.rooms, action.payload ]
            };

        case DELETE_ROOM:
            return {
                ...state,
                rooms: state.rooms.filter(room => room.id !== action.payload)
            };

        case JOIN_ROOM_FAIL:
        case CREATE_ROOM_FAIL:
        case DELETE_ROOM_FAIL:
            return state;

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
