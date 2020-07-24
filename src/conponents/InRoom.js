import React from 'react';

import Channels from './Channels';
import InChannel from './InChannel';
import RoomSettingModal from './RoomSettingModal';

export default class InRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    handleShowModal = () => {
        this.setState({
            show: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <div className="InRoom">
                <Channels handleShowModal={this.handleShowModal} />
                <InChannel />

                { this.state.show ? <RoomSettingModal handleCloseModal={this.handleCloseModal} /> : null }
            </div>
        )
    }
};
