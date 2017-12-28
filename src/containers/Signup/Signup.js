import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../../components/UI/FormInput/FormInput";
import Button from "../../components/UI/Button/Button";
import styles from "./Signup.css";

import Layout from "../../hoc/Layout/Layout";

const Signup = props => {
  return (
    <Layout>
      <div className={styles.Signup}>
        <div className={styles.SignupForm}>
          <Button type="facebook">Signup with Facebook</Button>
          <div>
            <div>
              <p>
                <strong>or sign up with your email address</strong>
              </p>
            </div>
            <form>
              <fieldset>
                <ul>
                  <FormInput
                    name="register-email"
                    type="email"
                    placeholder="email"
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
};

export default Signup;
