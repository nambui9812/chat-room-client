// Require packages
import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import RoomReducer from './RoomReducer';
import ChannelReducer from './ChannelReducer';
import MessageReducer from './MessageReducer';

export default combineReducers({
    UserReducer,
    RoomReducer,
    ChannelReducer,
    MessageReducer
});
