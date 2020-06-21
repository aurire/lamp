import React from "react";
import {connect} from "react-redux";
import {initiateLogout} from "../actions";
import {withRouter} from 'react-router';

const mapStateToProps = (state) => {
    return {...state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        initiateLogout: () => dispatch(initiateLogout())
    };
};

class Logged extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(event) {
        this.props.initiateLogout();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user === null) {
            this.props.history.push('/');
        }
    }
    render() {
        return (
            <div>
                <div>Logged</div>
                <button onClick={this.handleLogoutClick}>Log out</button>
            </div>
        );

    }
}

const connectedLogged = connect(mapStateToProps, mapDispatchToProps)(Logged);

export default withRouter(connectedLogged);
