import {
    //MEMBERS_LOADING,
    MEMBERS_LOADED,
    MEMBERS_LOADED_FAIL,
    CLEAR_MEMBER_REDUCER
} from '../actions/types';

const intitialState = {
    members: null
};

export default function MemberReducer(state = intitialState, action) {
    switch(action.type) {
        case MEMBERS_LOADED:
            return {
                ...state,
                members: action.payload
            };

        case MEMBERS_LOADED_FAIL:
        case CLEAR_MEMBER_REDUCER:
            return {
                ...state,
                members: null
            };

        default:
            return state;
    }
};
