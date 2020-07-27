import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../images/close.svg';

import { deleteMember } from '../actions/MemberAction';

class EachMemeberConfig extends React.Component {

    onClickHandle = () => {
        const body = {
            token: this.props.UserReducer.token,
            memberId: this.props.member.id
        };

        // Delete member
        deleteMember(body);
    }

    render() {
        const { member } = this.props;

        return (
            <div className="EachMemberConfig">
                # {member.name} <DeleteIcon className="delete-icon" onClick={() => this.onClickHandle()} />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(EachMemeberConfig);
