import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, align }) => {
  return (
    <article className={styles.container} style={{ textAlign: align }}>
      {children}
    </article>
  );
};
export default Container;
