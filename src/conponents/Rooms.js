import React from 'react';
import { connect } from 'react-redux';

import EachRoom from './EachRoom';

import { logout } from '../actions/UserAction';
import { loadRooms } from '../actions/RoomAction';

import { ReactComponent as AddIcon } from '../images/add.svg';
import { ReactComponent as UserIcon } from '../images/user.svg';
import { ReactComponent as LogoutIcon } from '../images/logout.svg';

class Rooms extends React.Component {

    componentDidUpdate(preProps) {
        if (this.props.UserReducer !== preProps.UserReducer) {
            if (this.props.UserReducer.token) {
                loadRooms(this.props.UserReducer.token);
            }
        }
    }

    logoutHandler = () => {
        logout();
    }

    render() {
        const { rooms } = this.props.RoomReducer;
        
        return (
            <div className="Rooms">
                <div className="rooms">
                    { rooms ? rooms.map((room, index) => <EachRoom key={index} room={room} />) : null }
                </div>

                <div className="icons">
                    <AddIcon className="add-icon" onClick={() => this.props.handleShowModal()}/>
                </div>

                <div className="icons">
                    <UserIcon className="user-icon" />
                </div>

                <div className="icons">
                    <LogoutIcon className="logout-icon" onClick={() => this.logoutHandler()} />
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer
});

export default connect(mapStateToProps)(Rooms);
