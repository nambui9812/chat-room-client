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
                    Hello there
                </div>
            </div>
        )
    }
};

export default RoomSettingModal;
