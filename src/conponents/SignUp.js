// Require packages
import React from 'react';

import { register } from '../actions/UserAction';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            password: ''
        };
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();

        const body = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        };

        register(body);
    }

    render() {
        return (
            <form className="SignUp" onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="inputs">
                    <label htmlFor="name" >Name: <input
                            id="name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <div className="inputs">
                    <label htmlFor="username">Username: <input
                            id="username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <div className="inputs">
                    <label htmlFor="password">Password: <input
                            id="password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <input className="submit-button" type="submit" value="Submit" />
            </form>
        )
    }
};
