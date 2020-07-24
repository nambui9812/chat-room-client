// Require packages
import React from 'react';
import { connect } from 'react-redux';

import { joinRoom } from '../actions/RoomAction';

class JoinRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            roomId: '',
            name: ''
        };
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();

        const body = {
            token: this.props.UserReducer.token,
            roomId: this.state.roomId,
            name: this.state.name
        };

        // Join room
        joinRoom(body);

        // Close modal
        this.props.handleCloseModal();
    }

    render() {
        return (
            <form className="JoinRoom" onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="inputs">
                    <label htmlFor="roomId">Room Id: <input
                            id="roomId"
                            name="roomId"
                            type="text"
                            value={this.state.roomId}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <div className="inputs">
                    <label htmlFor="name">Name: <input 
                            id="name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <input className="submit-button" type="submit" value="Submit" />
            </form>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(JoinRoom);
