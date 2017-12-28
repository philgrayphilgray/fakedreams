import React from "react";
import styles from "./Button.css";

const Button = props => {
  return (
    <div className={styles.Container}>
      <button
        className={[styles.Button, props.type].join(" ")}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
