import React from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Home extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isSignIn: true
        }
    }

    onSignIn = () => {
        this.setState({
            isSignIn: true
        });
    }

    onSignUp = () => {
        this.setState({
            isSignIn: false
        })
    }

    render() {
        return (
            <div className="Home">
                <div className="menus">
                    <div className="signin-menu" onClick={this.onSignIn}>Sign in</div>
                    <div className="signup-menu" onClick={this.onSignUp}>Sign up</div>
                </div>
                <div className="form">
                    {this.state.isSignIn ? <SignIn /> : <SignUp />}
                </div>
            </div>
        )
    }
};
