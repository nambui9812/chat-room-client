import React from 'react';
import { connect } from 'react-redux';

import EachChannelConfig from './EachChannelConfig';

import { createChannel } from '../actions/ChannelAction';

class ChannelConfig extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            token: this.props.UserReducer.token,
            roomId: this.props.RoomReducer.currentRoomId,
            name: this.state.name
        };

        // Create channel
        createChannel(body);
    }

    render() {
        return (
            <div className="ChannelConfig">
                <form className="create-channel" onSubmit={(e) => this.handleSubmit(e)}>
                    <h4>Create a new channel</h4><br></br>
                    <label htmlFor="channel-name">Name:  <input type="text" name="name" id="channel-name" value={this.state.name} onChange={(e) => this.handleChange(e)} /></label>
                    <input type="submit" value="Submit" id="create-channel-submit" />
                </form>

                <div className="ChannelConfigBody">
                    { this.props.ChannelReducer.channels ? this.props.ChannelReducer.channels.map((channel, index) => <EachChannelConfig key={index} channel={channel} />) : null }
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer,
    ChannelReducer: state.ChannelReducer
});

export default connect(mapStateToProps)(ChannelConfig);
