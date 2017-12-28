import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";
import styles from "./Login.css";
import * as actions from "../../store/actions";
import Layout from "../../hoc/Layout/Layout";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeEmailHandler = e => {
    this.setState({ email: e.target.value });
  };
  onChangePasswordHandler = e => {
    this.setState({ password: e.target.value });
  };

  submitLoginHandler = e => {
    e.preventDefault();
    // this.props.history.push("/profile");
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <Layout>
        <div className={styles.Login}>
          <div className={styles.LoginForm}>
            <Button type="facebook" clicked={this.submitLoginHandler}>
              Login with Facebook
            </Button>
            <div>
              <form onSubmit={this.submitLoginHandler}>
                <fieldset>
                  <ul>
                    <FormInput
                      name="auth-email"
                      type="email"
                      placeholder="email"
                      required
                      change={this.onChangeEmailHandler}
                    />
                    <FormInput
                      name="auth-password"
                      type="password"
                      placeholder="password"
                      required
                      change={this.onChangePasswordHandler}
                    />
                  </ul>
                </fieldset>
                <Button type="success">Login</Button>
              </form>
              <p>
                <Link to="/">Forgot your username or password?</Link>
              </p>
              <p>
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.auth(email, password, false))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
