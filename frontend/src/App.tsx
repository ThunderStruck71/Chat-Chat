
import React from "react";
import { hot } from "react-hot-loader/root";
import { Redirect, Route, Switch } from "react-router";
import {LoginPage} from "./pages";

function _App(): JSX.Element | null {
    return (
        <Switch>
            <Route path="/login" component={LoginPage}/>
            <Redirect from="/" to="/login"/>
        </Switch>
    );
};

export const App = hot(_App);