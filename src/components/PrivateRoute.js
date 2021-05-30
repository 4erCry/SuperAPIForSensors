import React from "react";
import {Redirect, Route} from "react-router-dom";
import checkAuthorization from "./checkAuthorization";

export const PrivateRoute = ({ component: Component, ...rest }) => {

    let isLoggedIn = checkAuthorization()

    return (
        <Route {...rest} render={props => isLoggedIn
            ? (
                <Component key={props.match.params.id || 'empty'} {...props} />
            ) : (
                <Redirect to={{ pathname: '/entrance', state: { from: props.location }}} />
            )
        } />
    )
}