import React from "react";
import {connect} from "react-redux";
import {getUserData, initiateLogout} from "../actions";
import {withRouter} from 'react-router';
import {Link} from "react-router-dom";

const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        initiateLogout: () => dispatch(initiateLogout()),
        getUserData: (id) => dispatch(getUserData(id))
    };
};

class Logged extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        let user = localStorage.getItem('user');
        this.state = {
            user: user
        };
    }
    handleLogoutClick(event) {
        this.props.initiateLogout();
    }
    componentDidMount() {
        if (null !== this.state.user && null === this.props.user) {
            this.props.getUserData(this.state.user);
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentUpdated');
        if (null === this.state.user) {
            this.props.history.push('/');
        }
    }
    render() {

        if (this.props.userData === null) {

            this.props.getUserData(this.props.user);
        }
        const email = this.props.userData ? this.props.userData.email: '';
        return (
            <div>
                <div>User email: {email}</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/note-create">Create note</Link>
                        </li>
                        <li>
                            <Link to="/note-shared-with-me">Notes shared with me</Link>
                        </li>
                        <li>
                            <Link to="/notes-shared-by-me">My shared notes</Link>
                        </li>
                    </ul>

                </nav>
                <button onClick={this.handleLogoutClick}>Log out</button>
            </div>
        );

    }
}

const connectedLogged = connect(mapStateToProps, mapDispatchToProps)(Logged);

export default withRouter(connectedLogged);
