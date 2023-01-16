import React from "react";
import Container from "../../components/UI/Container";
import styles from "./Rank.module.scss";

const Rank = () => {
  return (
    <section className={styles.rankContainer}>
      <Container width="45%" align="center">
        <h1>주요 도시별 미세먼지 농도 순위</h1>
      </Container>
    </section>
  );
};

export default Rank;
