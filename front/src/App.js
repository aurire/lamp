import React from "react";
import {connect} from 'react-redux';
import {fetchPosts, fetchUsers} from "./actions";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Logged from "./pages/Logged";
import Unlogged from "./pages/Unlogged";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUsers: () => dispatch(fetchUsers())
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        let user = localStorage.getItem('user');
        console.log(user);
    }
    handleClick(event) {
        console.log('button clicked');
        this.props.fetchPosts();
    }
    handleClick2(event) {
        console.log('button2 clicked');
        this.props.fetchUsers();
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Unlogged />
                        </Route>
                        <Route path="/home">
                            <Logged />
                        </Route>
                    </Switch>
                </Router>
                <h1>Test</h1>
                <button onClick={this.handleClick}>Test1</button>
                <h1>Test2</h1>
                <button onClick={this.handleClick2}>Test2</button>
            </div>
        );
    }
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export {connectedApp as App};
