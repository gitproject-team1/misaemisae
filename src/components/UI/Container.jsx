import React from "react";
import styles from "./Container.module.scss";

// props= {children, width, a, b,c }
const Container = ({ children, width, align }) => {
  return (
    <article
      className={styles.container}
      style={{ width: width, textAlign: align }}
    >
      {children}
    </article>
  );
};
export default Container;
