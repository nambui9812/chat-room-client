import React from 'react';
import { connect } from 'react-redux';

import EachMessage from './EachMessage';

import { loadMessages } from '../actions/MessageAction';

class Messages extends React.Component {

    componentDidUpdate(preProps) {
        if (this.props.ChannelReducer !== preProps.ChannelReducer) {
            if (this.props.ChannelReducer.currentChannelId) {
                loadMessages(this.props.UserReducer.token, this.props.ChannelReducer.currentChannelId);
            }
        }
    }

    render() {
        const { messages } = this.props.MessageReducer;

        return (
            <div className="Messages">
                {messages ? messages.map((message, index) => <EachMessage key={index} message={message} />) : null}
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    ChannelReducer: state.ChannelReducer,
    MessageReducer: state.MessageReducer
});

export default connect(mapStateToProps)(Messages);
