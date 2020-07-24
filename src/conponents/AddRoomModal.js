import React from 'react';

import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';

import { ReactComponent as CloseIcon } from '../images/close.svg';

export default class AddRoomModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isJoinRoom: true
        };
    }

    onJoinRoom = () => {
        this.setState({
            isJoinRoom: true
        });
    }

    onCreateRoom = () => {
        this.setState({
            isJoinRoom: false
        });
    }

    render() {
        return (
            <div className="AddRoomModal">
                <div className="add-room-modal-header">
                    <CloseIcon className="close-icon" onClick={() => this.props.handleCloseModal()} />
                </div>

                <div className="add-room-modal-body">
                    <div className="add-room-modal-menus">
                        <div className="join-room" onClick={() => this.onJoinRoom()}>Join a room</div>
                        <div className="create-room" onClick={() => this.onCreateRoom()}>Create a new room</div>
                    </div>
                    <div className="add-room-form">
                        { this.state.isJoinRoom ? <JoinRoom handleCloseModal={this.props.handleCloseModal} /> : <CreateRoom handleCloseModal={this.props.handleCloseModal} /> }
                    </div>
                </div>
            </div>
        )
    }
};
