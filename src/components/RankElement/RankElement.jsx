import React from "react";
import styles from "./RankElement.module.scss";

const RankElement = ({ sido, pm10, pm25, index }) => {
  let pmGrade = "";
  let color = "#666666";
  if (pm10 != "-") {
    if (pm10 <= 30) {
      color = "#1e64ee";
      pmGrade = "좋음";
    } else if (pm10 <= 80) {
      color = "#00d500";
      pmGrade = "보통";
    } else if (pm10 <= 150) {
      color = "#f95a20";
      pmGrade = "나쁨";
    } else {
      color = "#e73532";
      pmGrade = "매우 나쁨";
    }
  } else pmGrade = "측정중";

  return (
    <div className={styles.container}>
      <span>{index + 1}</span>
      <div className={styles.description}>
        <span>{sido}</span>
        <span style={{ color: color }}>{pmGrade}</span>
        <div className={styles.pm}>
          <div>
            <span>미세먼지</span>
            <span>{pm10}</span>
          </div>
          <div>
            <span>초미세먼지</span>
            <span>{pm25}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankElement;
