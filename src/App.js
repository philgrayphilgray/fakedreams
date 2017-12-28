import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./containers/LoginPage/LoginPage";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import ProfilePage from "./containers/ProfilePage/ProfilePage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
