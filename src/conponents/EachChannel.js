import React from 'react';

import { setCurrentChannelId } from '../actions/ChannelAction';

import socket from '../socket';

class EachChannel extends React.Component {

    onClickHandle = () => {
        setCurrentChannelId(this.props.channel.id);

        socket.emit('leave');
        socket.emit('join channel', this.props.channel.id);
    }
    
    render() {
        const { channel } = this.props;

        return (
            <div className="EachChannel" onClick={() => this.onClickHandle()}>
                # {channel.name}
            </div>
        )
    }

}

export default EachChannel;
