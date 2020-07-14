import React from 'react';

import Rooms from './Rooms';
import InRoom from './InRoom';

import store from '../store';
import { loadUser } from '../actions/UserAction';

export default class Main extends React.Component {

    componentDidMount() {
        loadUser(store.getState().UserReducer.token);
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
