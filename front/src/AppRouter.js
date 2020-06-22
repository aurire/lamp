import React from "react";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Logged from "./pages/Logged";
import Unlogged from "./pages/Unlogged";
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
                    <Unlogged />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route path="/home">
                    <Logged />
                </Route>
            </Switch>
        );
    }
};
const connectedAppRouter = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default withRouter(connectedAppRouter);
