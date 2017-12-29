import React, { Component } from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { AnimatedSwitch } from "react-router-transition";

import * as actions from "./store/actions";
import LoginPage from "./containers/LoginPage/LoginPage";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ProfilePage from "./containers/ProfilePage/ProfilePage";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {
    let routes = (
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        {this.props.isAuthenticated}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={LoginPage} />
        <Redirect to="/" />
      </AnimatedSwitch>
    );
    // TODO: Handle authenticated routes.
    if (this.props.isAuthenticated) {
      routes = (
        <Switch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={ProfilePage} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <div>{routes}</div>;
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDisptatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.checkAuthState())
  };
};

export default withRouter(connect(mapStateToProps, mapDisptatchToProps)(App));
