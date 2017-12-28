import React from "react";

import styles from "./FormInput.css";

const FormInput = props => {
  return (
    <li className={styles.FormInput}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </li>
  );
};

export default FormInput;
