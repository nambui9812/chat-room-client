import React from 'react';
import { connect } from 'react-redux';

import Rooms from './Rooms';
import InRoom from './InRoom';

import { loadUser } from '../actions/UserAction';

class Main extends React.Component {

    componentDidMount() {
        loadUser(this.props.UserReducer.token);
    }

    render() {
        console.log('Render in Main');
        
        return (
            <div className="Main">
                <Rooms />
                <InRoom />                
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(Main);
