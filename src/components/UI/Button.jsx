import React from "react";
import styles from "./Button.module.scss";

// 통일해야겠다
const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
