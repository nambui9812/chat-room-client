import React from 'react';
import { connect } from 'react-redux';

class EachMessage extends React.Component {
    
    render() {
        const { message, MemberReducer } = this.props;
        const currentMember = MemberReducer.members.filter(member => member.userId === message.userId)[0];

        return (
            <div className="EachMessage">
                <h4>{currentMember ? currentMember.name : 'User with id ' + message.userId} sent:</h4><br />
                <p>{message.content}</p>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    MemberReducer: state.MemberReducer
});

export default connect(mapStateToProps)(EachMessage);
