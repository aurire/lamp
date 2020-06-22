import React from "react";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import User from "./pages/Logged/User";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {connect} from "react-redux";
import {locationChanged} from "./actions";

const mapDispatchToProps = (dispatch) => {
    return {
        locationChanged: () => dispatch(locationChanged()),
    };
};

const mapStateToProps = (state) => {
    return {...state};
};

class AppRouter extends React.Component {
    componentDidMount() {
        this.props.history.listen((location) => {
            this.props.locationChanged();
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route path="/user/">
                    <User />
                </Route>
            </Switch>
        );
    }
};
const connectedAppRouter = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default withRouter(connectedAppRouter);
