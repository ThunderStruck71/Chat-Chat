
import { history } from "./helpers";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Router, Switch } from "react-router";
import { ChatRoomPage, LoginPage, ErrorPage } from "./pages";
import { PrivateRoute } from "./components";
import { useSelector } from "react-redux";
import { RootState } from "reducers";

function _App(): JSX.Element | null {
    const {loggedIn} = useSelector((state: RootState) => state.login);

    return (
        <Router history={history}>
            <Switch>
                <Route path="/auth" component={LoginPage} />
                <Route path="/error" component={ErrorPage} />
                <PrivateRoute path="/chatRoom" component={ChatRoomPage} isLoggedIn={loggedIn} />
                <Redirect from="/" to="/auth" />
            </Switch>
        </Router>
    );
};

export const App = hot(_App);