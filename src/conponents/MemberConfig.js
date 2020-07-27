import React from 'react';
import { connect } from 'react-redux';

import EachMemberConfig from './EachMemberConfig';

class MemberConfig extends React.Component {
    render() {
        const { members } = this.props.MemberReducer;

        return (
            <div className="MemberConfig">
                { members ? members.map((member, index) => <EachMemberConfig key={index} member={member} />) : null }
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    MemberReducer: state.MemberReducer
});

export default connect(mapStateToProps)(MemberConfig);
