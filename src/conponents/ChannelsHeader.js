import React from 'react';
import { connect } from 'react-redux';

class ChannelsHeader extends React.Component {

    render() {
        const { rooms, currentRoomId } = this.props.RoomReducer;

        const currentRoom = rooms.filter(room => room.id === currentRoomId)[0];

        return (
            <div className="ChannelsHeader">
                <p>{currentRoom.name}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    RoomReducer: state.RoomReducer
});

export default connect(mapStateToProps)(ChannelsHeader);
