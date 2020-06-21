import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Logged from "./pages/Logged";
import Unlogged from "./pages/Unlogged";

class App extends React.Component {
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
            </div>
        );
    }
};

export default App;
