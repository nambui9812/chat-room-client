import React from 'react';
import { connect } from 'react-redux';

class InChannelHeader extends React.Component {

    render() {
        const { channels, currentChannelId } = this.props.ChannelReducer;
        let currentChannel = null;

        if (currentChannelId) {
            currentChannel = channels.filter(channel => channel.id === currentChannelId)[0];
        }

        return (
            <div className="InChannelHeader">
                <p>{currentChannel ? currentChannel.name : 'Please select a channel'}</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    ChannelReducer: state.ChannelReducer
});

export default connect(mapStateToProps)(InChannelHeader);
