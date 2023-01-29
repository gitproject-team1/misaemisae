import React, { useState, useEffect } from "react";
import styles from "./CartElement.module.scss";
import { fetchData } from "../../api/api";
import Load from "../UI/Load";
import colorChange from "./../../utils/colorChange";
import expressionChange from "./../../utils/expressionChange";

const CartElement = ({ value, setLocation }) => {
  const [sido, setSido] = useState(value.location.split(" ")[0]);
  const [station, setStation] = useState(value.location.split(" ")[1]);
  const [data, setData] = useState("");
  const [pmgrade, setPmgrade] = useState("");
  const [loadStatus, setLoadStatus] = useState(false);
  const [isError, setIsError] = useState("");
  const [color, setColor] = useState("#666666");

  useEffect(() => {
    fetchData(sido, station, setData, setPmgrade, setLoadStatus, setIsError);
  }, []);

  useEffect(() => {
    colorChange(pmgrade, setColor);
  }, [pmgrade]);

  return (
    <article className={styles.container}>
      <div className={styles.left_box}>
        <div
          onClick={() => {
            setLocation(value.location);
          }}
          className={styles.delete}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <h2>{value.location}</h2>
      </div>
      <div className={styles.status} style={{ backgroundColor: color }}>
        {expressionChange(pmgrade)}
        <h5>
          {pmgrade
            ? ["좋음", "보통", "나쁨", "매우나쁨"][pmgrade - 1]
            : "측정중"}
        </h5>
      </div>
      {loadStatus && <Load />}
    </article>
  );
};

export default CartElement;
