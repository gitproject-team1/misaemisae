import React from "react";
import styles from "./Welcome.module.scss";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <i className="fa-brands fa-skyatlas"></i>
      <br />
      미세먼지에 관한 모든 것.
      <h1>미세미세</h1>
      <p>원하는 지역을 골라주세요!</p>
      <Select>서울</Select>
      <Button>검색</Button>
    </div>
  );
};

export default Welcome;
