import React from 'react';

import ChannelsHeader from './ChannelsHeader';
import ChannelsBody from './ChannelsBody';
import ChannelsFooter from './ChannelsFooter';

export default class Channels extends React.Component {

    render() {
        return (
            <div className="Channels">
                <ChannelsHeader />
                <ChannelsBody />
                <ChannelsFooter handleShowModal={this.props.handleShowModal} />
            </div>
        )
    }
};
