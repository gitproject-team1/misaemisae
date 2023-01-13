import React, { useState } from "react";
import styles from "./Select.module.scss";

const Select = ({ selectSido, selectStation, stations }) => {
  let sidoName = [
    "지역",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
    "세종",
  ];

  if (stations.length > 0) {
    sidoName = stations;
  }

  const handleSido = (event) => {
    if (stations.length > 0) {
      selectStation(event.target.value);
    } else {
      selectSido(event.target.value);
    }
  };

  return (
    <select name="sido" className={styles.select} onChange={handleSido}>
      {sidoName.map((sido) => (
        <option value={sido} key={sido}>
          {sido}
        </option>
      ))}
    </select>
  );
};

export default Select;
