import React from 'react';
import { connect } from 'react-redux';

import { setMessage, sendMessage } from '../actions/MessageAction';

class MessageInput extends React.Component {

    onChangeHandler = (e) => {
        setMessage(e.target.value);
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const body = {
            token: this.props.UserReducer.token,
            roomId: this.props.RoomReducer.currentRoomId,
            channelId: this.props.ChannelReducer.currentChannelId,
            content: this.props.MessageReducer.currentMessage
        }

        sendMessage(body);
    }

    render() {
        return (
            <form className="MessageInput" onSubmit={(e) => this.onSubmitHandler(e)}>
                <input className="message-input" type="text" value={this.props.MessageReducer.currentMessage} onChange={(e) => this.onChangeHandler(e)} />
                <input className="send-button" type="submit" value="Submit" />
            </form>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer,
    ChannelReducer: state.ChannelReducer,
    MessageReducer: state.MessageReducer
})

export default connect(mapStateToProps)(MessageInput);
