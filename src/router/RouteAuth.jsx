import React from "react";
import { Route, Redirect } from "react-router-dom";
import RouterConfig from "./RouterConfig";

const RouteAuth = (props) => {
    const pathname = props.location.pathname;
    const targetRouter = RouterConfig.find((item) => {
        return item.path === pathname;
    });
    const token = localStorage.getItem("token") || '';

    if (pathname === "/") {
        if (token.length > 0) {
            return <Redirect to="post"></Redirect>;
        }
        else {
            return <Redirect to="login"></Redirect>;
        }
    }

    if (token.length > 0) {
        if (pathname === "/login") {
            return <Redirect to="post"></Redirect>;
        }

        return (
            <Route exact path={pathname} component={targetRouter.component} />
        );
    } else {
        if (targetRouter.auth) {
            return <Redirect exact to="/login" />;
        } else {
            return (
                <Route exact path={pathname} component={targetRouter.component} />
            );
        }
    }
}

export default RouteAuth;