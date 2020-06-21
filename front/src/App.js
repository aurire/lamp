import React from "react";
import {connect} from 'react-redux';
import {fetchPosts, fetchUsers} from "./actions";

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
        const textState = JSON.stringify(this.state);
        const textStorage = window.store ? JSON.stringify(window.store.getState()) : '';

        return (
            <div>
                <h1>State</h1>
                <textarea readOnly value={textState} />
                <h1>Storage</h1>
                <textarea readOnly value={textStorage} />

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
