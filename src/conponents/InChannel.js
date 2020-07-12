import React from 'react';

import InChannelHeader from './InChannelHeader';
import InChannelBody from './InChannelBody';

export default class InChannel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InChannel">
                <InChannelHeader />
                <InChannelBody />
            </div>
        )
    }
};
