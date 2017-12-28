import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/logo.svg";
import styles from "./Logo.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <Link to="/">
        <img src={LogoSvg} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
