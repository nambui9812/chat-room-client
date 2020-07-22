import React from 'react';
import { connect } from 'react-redux';

import Rooms from './Rooms';
import InRoom from './InRoom';
import EmptyRoom from './EmptyRoom';
import AddRoomModal from './AddRoomModal';

import { loadUser, clearUserReducer } from '../actions/UserAction';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    componentDidMount() {
        loadUser(this.props.UserReducer.token);
    }

    componentWillUnmount() {
        localStorage.removeItem('token');
        clearUserReducer();
    }

    showModal = () => {
        this.setState({
            show: true
        });
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className="Main">
                <Rooms handleShowModal={this.showModal} />
                {this.props.RoomReducer.currentRoomId ? <InRoom /> : <EmptyRoom />}
                { this.state.show ? <AddRoomModal handleCloseModal={this.closeModal} /> : null }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer
});

export default connect(mapStateToProps)(Main);
