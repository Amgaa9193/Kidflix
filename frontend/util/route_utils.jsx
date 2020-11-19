import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});



const Auth = ({loggedIn, path, component: Component}) => (
    <Route
    path={path}
    render={props => (
        loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
    )}
    />
);

const Prot = ({loggedIn, path, component: Component}) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
        )}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Prot));