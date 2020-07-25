import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../images/close.svg';

import { deleteChannel } from '../actions/ChannelAction';

class EachChannelConfig extends React.Component {

    onClickHandle = () => {
        const body = {
            token: this.props.UserReducer.token,
            channelId: this.props.channel.id
        };

        // Delete channel
        deleteChannel(body);
    }
    
    render() {
        const { channel } = this.props;

        return (
            <div className="EachChannelConfig">
                # {channel.name} <DeleteIcon className="delete-icon" onClick={() => this.onClickHandle()} />
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(EachChannelConfig);
