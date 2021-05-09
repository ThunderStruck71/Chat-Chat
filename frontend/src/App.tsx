
import { history } from "./helpers";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Router, Switch } from "react-router";
import { LoginPage } from "./pages";

function _App(): JSX.Element | null {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Redirect from="*" to="/login" />
            </Switch>
        </Router>
    );
};

export const App = hot(_App);