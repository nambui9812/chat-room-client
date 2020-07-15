// Require packages
import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import RoomReducer from './RoomReducer';

export default combineReducers({
    UserReducer,
    RoomReducer
});
