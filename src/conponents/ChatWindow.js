import React from 'react';
import { connect } from 'react-redux';

import Messages from './Messages';
import MessageInput from './MessageInput';
import EmptyChannel from './EmptyChannel';

class ChatWindow extends React.Component {

    render() {
        return (
            <div className="ChatWindow">
                {this.props.ChannelReducer.currentChannelId ?
                    <React.Fragment>
                        <Messages />
                        <MessageInput />
                    </React.Fragment> :
                    <EmptyChannel />}
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    ChannelReducer: state.ChannelReducer
});

export default connect(mapStateToProps)(ChatWindow);
