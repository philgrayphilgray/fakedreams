import React from "react";

import Logo from "../../components/Logo/Logo";
import styles from "./Layout.css";

const Layout = props => {
  return (
    <div className={styles.Layout}>
      <header>
        <Logo />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
