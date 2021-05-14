import React, { FC } from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
  isLoggedIn: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = props => {
  const { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest} render={routeProps => (
      localStorage.getItem("user")
        ? (
          <Component {...routeProps} />
        )
        : (
          <Redirect to={{
            pathname: "/auth",
            state: { from: routeProps.location }
          }} />
        )
    )} />
  )
}