import React from 'react';

import InChannelHeader from './InChannelHeader';
import InChannelBody from './InChannelBody';

export default class InChannel extends React.Component {

    render() {
        return (
            <div className="InChannel">
                <InChannelHeader />
                <InChannelBody />
            </div>
        )
    }
};
