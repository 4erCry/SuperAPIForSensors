import React from "react";
import {Redirect, Route} from "react-router-dom";
import {withAuth} from "./UserStatus";

export const PrivateRoute = withAuth(
    ({component: RouteComponent, isAuthorized, ...rest}) => (
    <Route {...rest} render={routerProps => (
        isAuthorized ?
            (<RouteComponent {...routerProps}/>) : (<Redirect to={"/entrance"}/>)
    )}/>
))