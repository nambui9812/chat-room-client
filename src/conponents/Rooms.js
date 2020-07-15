import React from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';

import { loadRooms } from '../actions/RoomAction';

const EachRoom = (props) => {
    const { room } = props;

    return (
        <div className="EachRoom">
            <img className="room-images" src={logo} alt={room.name} />
            <span className="room-name">{room.name}</span>
        </div>
    )
}

class Rooms extends React.Component {

    componentDidMount() {
        loadRooms(this.props.UserReducer.token);
    }

    render() {
        const { rooms } = this.props.RoomReducer;
        
        return (
            <div className="Rooms">
                { rooms ? rooms.map((room, index) => <EachRoom key={index} room={room} />) : null }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer
});

export default connect(mapStateToProps)(Rooms);
