import React from 'react';

import Channels from './Channels';
import InChannel from './InChannel';

export default class InRoom extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InRoom">
                <Channels />
                <InChannel />
            </div>
        )
    }
};
