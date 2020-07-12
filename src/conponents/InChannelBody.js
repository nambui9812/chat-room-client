import React from 'react';

import ChatWindow from './ChatWindow';
import Members from './Members';

export default class InChannelBody extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="InChannelBody">
                <ChatWindow />
                <Members />
            </div>
        )
    }
};
