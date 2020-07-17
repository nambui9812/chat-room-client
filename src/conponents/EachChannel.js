import React from 'react';

import { setCurrentChannelId } from '../actions/ChannelAction';

class EachChannel extends React.Component {

    onClickHandle = () => {
        setCurrentChannelId(this.props.channel.id);
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
