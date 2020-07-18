import React from 'react';
import { connect } from 'react-redux';

import EachMember from './EachMember';

import { loadMembers } from '../actions/MemberAction';

class Members extends React.Component {

    componentDidUpdate(preProps) {
        if (this.props.RoomReducer !== preProps.RoomReducer) {
            loadMembers(this.props.UserReducer.token, this.props.RoomReducer.currentRoomId);
        }
    }

    render() {
        const { members } = this.props.MemberReducer;

        return (
            <div className="Members">
                { members ? members.map((member, index) => <EachMember key={index} member={member} />) : null }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer,
    RoomReducer: state.RoomReducer,
    MemberReducer: state.MemberReducer
});

export default connect(mapStateToProps)(Members);
