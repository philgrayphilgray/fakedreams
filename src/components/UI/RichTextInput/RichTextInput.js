import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
// TODO: figure out how to pull in vendor styles for draft-js
import styles from "./RichTextInput.css";

class RichTextInput extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };
  onChange = editorState => {
    this.setState({
      editorState
    });
  };
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }
  render() {
    return (
      <div className={styles.RichTextInput}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

export default RichTextInput;
