import React from 'react';

class EachMember extends React.Component {
    
    render() {
        const { member } = this.props;

        return (
            <div className="EachMember">
                # {member.name} is a {member.role} in this room.
            </div>
        )
    }

}

export default EachMember;
