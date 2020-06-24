import React from "react";
import {connect} from "react-redux";
import {getUserData, initiateLogout} from "../../actions";
import {withRouter} from 'react-router';
import {Link, Route, Switch} from "react-router-dom";
import List from "./User/Notes/List";
import NotesCreateEdit from "./User/Notes/NotesCreateEdit";
import NotesShare from "./User/Notes/NotesShare";
import NotesSharedWithMe from "./User/Notes/NotesSharedWithMe";

const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        initiateLogout: () => dispatch(initiateLogout()),
        getUserData: (id) => dispatch(getUserData(id))
    };
};

class User extends React.Component {
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
        if (null === this.props.user && true === this.props.loaded) {
            this.props.history.push('/');
        }
    }
    render() {

        if (this.props.userData === null) {
            this.props.getUserData(this.props.user);
        }
        const email = this.props.userData ? this.props.userData.email: '';
        const alert = this.props.alert;

        return (
            <div>
                <p>{alert}</p>
                <div>User email: {email}</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/user/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/user/notes/list/1">Notes</Link>
                        </li>
                        <li>
                            <Link to="/user/notes/create">Create note</Link>
                        </li>
                        <li>
                            <Link to="/user/notes/list/shared-with-me/1">Notes shared with me</Link>
                        </li>
                        <li>
                            <Link to="/user/notes/list/shared-by-me">My shared notes</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/user/notes/list/:id(\d+)" component={List} />
                    <Route path="/user/notes/create" component={NotesCreateEdit} />
                    <Route path="/user/notes/edit/:id(\d+)" component={NotesCreateEdit} />
                    <Route path="/user/notes/share/:id(\d+)" component={NotesShare} />
                    <Route path="/user/notes/list/shared-with-me/:id(\d+)" component={NotesSharedWithMe} />
                </Switch>
                <button onClick={this.handleLogoutClick}>Log out</button>
            </div>
        );
    }
}

const connectedUser = connect(mapStateToProps, mapDispatchToProps)(User);

export default withRouter(connectedUser);
