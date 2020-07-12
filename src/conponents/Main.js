import React from 'react';

import Rooms from './Rooms';
import InRoom from './InRoom';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Main">
                <Rooms />
                <InRoom />                
            </div>
        )
    }
};
