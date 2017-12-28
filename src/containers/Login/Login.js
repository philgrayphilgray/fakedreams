import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";
import styles from "./Login.css";
import Logo from "../../components/Logo/Logo";

const Login = props => {
  return (
    <div className={styles.Login}>
      <header>
        <Logo />
      </header>
      <div className={styles.LoginForm}>
        <Button type="facebook">Login with Facebook</Button>
        <div>
          <form action="post">
            <fieldset>
              <ul>
                <FormInput name="auth-email" type="email" placeholder="email" />
                <FormInput
                  name="auth-password"
                  type="password"
                  placeholder="password"
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
  );
};

export default Login;
