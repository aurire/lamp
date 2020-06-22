import React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {initiateLogin, getUserData} from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        initiateLogin: (email, password) => dispatch(initiateLogin(email, password)),
        getUserData: (id) => dispatch(getUserData(id))
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        let user = localStorage.getItem('user');
        this.state = {
            email: '',
            password: '',
            user: user,
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
        this.props.initiateLogin(this.state.email, this.state.password);
    }
    componentDidMount() {
        if (this.state.user !== null) {
            this.props.getUserData(this.state.user);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userData !== null) {
            this.props.history.push('/user/');
        }
    }

    render() {
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
        const alert = this.props.alert;

        return (
            <div>
                <p>{alert}</p>
                <h1>Login</h1>
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
                    {error}
                </form>
                <Link to="/register">Register</Link>
            </div>
        );
    }
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withRouter(connectedLogin);
