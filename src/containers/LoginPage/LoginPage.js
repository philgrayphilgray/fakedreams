import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import styles from "./LoginPage.css";

class LoginPage extends Component {
  signupClickHandler = e => {
    e.preventDefault();
    this.props.history.push("/signup");
  };
  loginClickHandler = e => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className={styles.LoginPage}>
        <div className={styles.Heading}>
          <h1>fake dreams</h1>
          <h3>for the dreams you never had.</h3>
        </div>
        <div className={styles.ButtonGroup}>
          <Button clicked={this.signupClickHandler}>signup</Button>
          <Button clicked={this.loginClickHandler}>login</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
