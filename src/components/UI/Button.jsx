import React from "react";
import styles from "./Button.module.scss";

// 통일해야겠다
const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
