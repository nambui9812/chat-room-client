import React from 'react';

import ChannelConfig from './ChannelConfig';
import MemberConfig from './MemberConfig';

import { ReactComponent as CloseIcon } from '../images/close.svg';

class RoomSettingModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            option: 1
        }
    }

    // 1 is channel config, 2 is member config, ...
    handleOption = (num) => {
        if (num === 1 || num === 2) {
            this.setState({
                option: num
            })
        }
    }

    handleRender = () => {
        if (this.state.option === 1) {
            return <ChannelConfig />
        }

        if (this.state.option === 2) {
            return <MemberConfig />
        }

        return <ChannelConfig />
    }

    render() {
        return (
            <div className="RoomSettingModal">
                <div className="room-setting-modal-header">
                    <CloseIcon className="close-icon" onClick={() => this.props.handleCloseModal()} />
                </div>

                <div className="room-setting-modal-body">
                    <div className="room-setting-menu">
                        <div className="room-setting-option" onClick={() => this.handleOption(1)}>Channels</div>
                        <div className="room-setting-option" onClick={() => this.handleOption(2)}>Members</div>
                    </div>

                    <div className="room-setting-config">
                        {this.handleRender()}
                    </div>
                </div>
            </div>
        )
    }
};

export default RoomSettingModal;
