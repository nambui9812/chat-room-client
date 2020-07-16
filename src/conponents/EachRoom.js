import React from 'react';

import logo from '../logo.svg';

import { setCurrentRoomId } from '../actions/RoomAction';

class EachRoom extends React.Component {

    onClickHandle = () => {
        setCurrentRoomId(this.props.room.id);
    }
    
    render() {
        const { room } = this.props;

        return (
            <div className="EachRoom">
                <img className="room-images" src={logo} alt={room.name} onClick={() => this.onClickHandle()} />
                <span className="room-name">{room.name}</span>
            </div>
        )
    }

}

export default EachRoom;
