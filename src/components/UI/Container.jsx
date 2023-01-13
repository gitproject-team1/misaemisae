import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, width }) => {
  return (
    <section className={styles.container} style={{ width: width }}>
      {children}
    </section>
  );
};
export default Container;
