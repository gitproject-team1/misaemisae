import React from "react";
import styles from "./Container.module.scss";
import styled from "styled-components";

// props= {children, width, a, b,c }
const Container = ({ children, width }) => {
  return (
    <section className={styles.container} style={{ width: width }}>
      {children}
    </section>
  );
};

// const Container = styled.section`
//   background-color: #ffffff;
//   border-radius: 8px;
//   margin: 1rem, 0.75rem;
//   text-align: center;
//   width: ${(props) => props.width};
// `;

export default Container;
