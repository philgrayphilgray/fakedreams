import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";
import styles from "./Login.css";

import Layout from "../../hoc/Layout/Layout";

class Login extends Component {
  submitLoginHandler = e => {
    e.preventDefault();
    this.props.history.push("/profile");
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
              <form>
                <fieldset>
                  <ul>
                    <FormInput
                      name="auth-email"
                      type="email"
                      placeholder="email"
                    />
                    <FormInput
                      name="auth-password"
                      type="password"
                      placeholder="password"
                    />
                  </ul>
                </fieldset>
                <Button type="success" clicked={this.submitLoginHandler}>
                  Login
                </Button>
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

export default withRouter(Login);
