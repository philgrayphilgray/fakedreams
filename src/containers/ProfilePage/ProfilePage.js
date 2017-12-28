import React, { Component } from "react";
import Layout from "../../hoc/Layout/Layout";

import Button from "../../components/UI/Button/Button";
import RichTextEditor from "../../components/UI/RichTextInput/RichTextInput";

class ProfilePage extends Component {
  render() {
    return (
      <Layout>
        <h2>Profile</h2>
        <RichTextEditor />
        <Button type="success">Save</Button>
      </Layout>
    );
  }
}

export default ProfilePage;
