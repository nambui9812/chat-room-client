import React from 'react';

import Messages from './Messages';
import MessageInput from './MessageInput';

class ChatWindow extends React.Component {

    render() {
        return (
            <div className="ChatWindow">
                <Messages />
                <MessageInput />
            </div>
        )
    }
};

export default ChatWindow;
