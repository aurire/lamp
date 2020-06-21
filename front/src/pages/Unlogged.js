import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {initiateLogin} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateLogin: (email, password) => dispatch(initiateLogin(email, password)),
    };
};

class Unlogged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick() {
        this.props.history.push('/home');
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.initiateLogin(this.state.email, this.state.password);
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" />
                    </div>
                    <input onClick={this.handleSubmit} type="submit" value="Login" />
                </form>
                <div>Unlogged</div>
                <button onClick={this.handleClick}>Navigate to home</button>
            </div>
        );

    }
}

const connectedUnlogged = connect(null, mapDispatchToProps)(Unlogged);
export default withRouter(connectedUnlogged);
