import React from 'react';
import { connect } from 'react-redux';

import EachRoom from './EachRoom';

import { loadRooms } from '../actions/RoomAction';

class Rooms extends React.Component {

    componentDidUpdate(preProps) {
        if (this.props.UserReducer !== preProps.UserReducer) {
            loadRooms(this.props.UserReducer.token);
        }
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
