import React from 'react';
import { connect } from 'react-redux';

import EachChannel from './EachChannel';

import { loadChannels } from '../actions/ChannelAction';

class ChannelsBody extends React.Component {

    componentDidUpdate(preProps) {
        if (this.props.RoomReducer !== preProps.RoomReducer) {
            loadChannels(this.props.UserReducer.token, this.props.RoomReducer.currentRoomId);
        }
    }

    render() {
        const { channels } = this.props.ChannelReducer;

        return (
            <div className="ChannelsBody">
                { channels ? channels.map((channel, index) => <EachChannel key={index} channel={channel} />) : null }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer,
    ChannelReducer: state.ChannelReducer
});

export default connect(mapStateToProps)(ChannelsBody);
