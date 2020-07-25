import React from 'react';

import { ReactComponent as CloseIcon } from '../images/close.svg';

class RoomSettingModal extends React.Component {
    render() {
        return (
            <div className="RoomSettingModal">
                <div className="room-setting-modal-header">
                    <CloseIcon className="close-icon" onClick={() => this.props.handleCloseModal()} />
                </div>

                <div className="room-setting-modal-body">
                    <div className="room-setting-menu">
                        <div>Channels</div>
                        <div>Members</div>
                        <div>Black list</div>
                    </div>

                    <div className="room-setting-config">
                        Config
                    </div>
                </div>
            </div>
        )
    }
};

export default RoomSettingModal;
