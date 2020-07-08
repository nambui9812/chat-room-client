import React from 'react';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
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

        alert(`Username is: ${this.state.username} & Password is: ${this.state.password}`);
    }

    render() {
        return (
            <form className="SignUp" onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="inputs">
                    <label htmlFor="firstName" >First name: <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <div className="inputs">
                    <label htmlFor="lastName">Last name: <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
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
