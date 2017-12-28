import React, { Component } from "react";
import Layout from "../../hoc/Layout/Layout";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Button from "../../components/UI/Button/Button";
// import RichTextEditor from "../../components/UI/RichTextInput/RichTextInput";
import FormInput from "../../components/UI/FormInput/FormInput";
import styles from "./ProfilePage.css";

class ProfilePage extends Component {
  state = {
    userMessage: ""
  };

  onChangeMessage = e => {
    this.setState({ userMessage: e.target.value });
  };
  render() {
    return (
      <Layout>
        <div className={styles.ProfilePage}>
          <h2>Profile</h2>
          <hr />
          <h3>Username</h3>
          <p>{this.props.user}</p>
          <h3>Message</h3>
          {this.state.userMessage ? <pre>{this.state.userMessage}</pre> : null}
          <ul>
            <FormInput
              name="bio"
              type="text"
              placeholder="your message"
              value={this.state.userMessage}
              change={this.onChangeMessage}
            />
          </ul>
          <Button type="success">Save</Button>
          <Button type="danger" clicked={this.props.logout}>
            Logout
          </Button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
