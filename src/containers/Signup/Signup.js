import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";
import styles from "./Signup.css";
import * as actions from "../../store/actions";
import Layout from "../../hoc/Layout/Layout";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  attemptLogin = e => {
    e.preventDefault();
    this.props.authenticate(this.state.email, this.state.password);
  };
  render() {
    return (
      <Layout>
        {this.props.isAuthenticated ? <Redirect to="/profile" /> : null}
        <div className={styles.Signup}>
          <div className={styles.SignupForm}>
            <Button type="facebook">Signup with Facebook</Button>
            <div>
              <div>
                <p>
                  <strong>or sign up with your email address</strong>
                </p>
              </div>
              <form onSubmit={this.attemptLogin}>
                <fieldset>
                  <ul>
                    <FormInput
                      name="register-email"
                      type="email"
                      placeholder="email"
                      change={this.onChangeEmail}
                      value={this.state.email}
                      required
                    />
                    <FormInput
                      name="confirm-email"
                      type="email"
                      placeholder="confirm email"
                    />
                    <FormInput
                      name="register-password"
                      type="password"
                      placeholder="password"
                      change={this.onChangePassword}
                      value={this.state.password}
                      required
                    />
                  </ul>
                </fieldset>
                <Button type="success">Signup</Button>
              </form>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  //hardcode isSignup value for now.
  return {
    authenticate: (userid, password) =>
      dispatch(actions.auth(userid, password, true))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
