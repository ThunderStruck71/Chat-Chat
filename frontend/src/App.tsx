
import { history } from "./helpers";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Router, Switch } from "react-router";
import { ChatRoomPage, LoginPage, ErrorPage } from "./pages";
import { PrivateRoute } from "./components";

function _App(): JSX.Element | null {
    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute path="/chatRoom" component={ChatRoomPage} />
                <Route path="/auth" component={LoginPage} />
                <Route path="/error" component={ErrorPage} />
                <Redirect from="*" to="/auth" />
            </Switch>
        </Router>
    );
};

export const App = hot(_App);