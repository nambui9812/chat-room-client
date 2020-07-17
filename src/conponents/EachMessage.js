import React from 'react';

class EachMessage extends React.Component {
    
    render() {
        const { message } = this.props;

        return (
            <div className="EachMessage">
                <h4>User {message.userId} sent:</h4>
                <p>{message.content}</p>
            </div>
        )
    }

}

export default EachMessage;
