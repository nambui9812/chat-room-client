import React from 'react';
import { connect } from 'react-redux';

import Rooms from './Rooms';
import InRoom from './InRoom';

import { loadUser, clearUserReducer } from '../actions/UserAction';

class Main extends React.Component {

    componentDidMount() {
        loadUser(this.props.UserReducer.token);
    }

    componentWillUnmount() {
        localStorage.removeItem('token');
        clearUserReducer();
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

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer
});

export default connect(mapStateToProps)(Main);
