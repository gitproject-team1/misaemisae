import React from "react";
import styles from "./Container.module.scss";

// props= {children, width, a, b,c }
const Container = ({ children, width, align }) => {
  return (
    <section className={styles.container} style={{ width: width, textAlign: align }}>
      {children}
    </section>
  );
};
export default Container;
