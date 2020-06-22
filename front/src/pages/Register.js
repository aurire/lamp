import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {initiateRegister, setAlert} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateRegister: (email, password) => dispatch(initiateRegister(email, password)),
        setAlert: (msg) => dispatch(setAlert(msg))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.initiateRegister(this.state.email, this.state.password);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (null !== this.props.userData) {
            this.props.history.push('/user/');
        }
        if (true === this.props.loaded) {
            this.props.setAlert('Succesfuly registered');
            this.props.history.push('/');
        }
    }

    render() {
        console.log('render');
        let error = '';
        if (this.props.error !== null) {
            if (
                this.props.error.response
                && this.props.error.response.data
                && this.props.error.response.data.error
            ) {
                error = <p>{this.props.error.response.data.error}</p>
            } else {
                error = <p>{this.props.error.message}</p>
            }
        }

        return (
            <div>
                <h1>Register</h1>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" name="password" id="password" />
                    </div>
                    <input onClick={this.handleSubmit} type="submit" value="Register" />
                    {error}
                </form>
                <Link to="/">Login</Link>
            </div>
        );
    }
}

const connectedRegister = connect(mapStateToProps, mapDispatchToProps)(Register);
export default withRouter(connectedRegister);
