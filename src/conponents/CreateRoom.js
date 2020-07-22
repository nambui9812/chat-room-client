// Require packages
import React from 'react';
import { connect } from 'react-redux';

class CreateRoom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            adminName: '',
            name: ''
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
            token: this.props.UserReducer.token,
            adminName: this.state.adminName,
            name: this.state.name
        };
        
        // Create room
    }

    render() {
        return (
            <form className="CreateRoom" onSubmit={(e) => this.onSubmitHandle(e)}>
                <div className="inputs">
                    <label htmlFor="adminName">Admin Name: <input
                            id="adminName"
                            name="adminName"
                            type="text"
                            value={this.state.adminName}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <div className="inputs">
                    <label htmlFor="name">Name: <input 
                            id="name"
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={(e) => this.onChangeHandle(e)}
                        />
                    </label>
                </div>

                <input className="submit-button" type="submit" value="Submit" />
            </form>
        )
    }
};

const mapStateToProps = (state) => ({
    UserReducer: state.UserReducer
});

export default connect(mapStateToProps)(CreateRoom);
