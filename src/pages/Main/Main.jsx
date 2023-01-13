import React, { useState, useEffect } from "react";
import getInfo from "../../api/requests";
import Container from "../../components/UI/Container";
import styles from "./Main.module.scss";
import Load from "../../components/UI/Load";

const Main = () => {
  const [defaultPlace, setDefaultPlace] = useState(
    JSON.parse(localStorage.getItem("defaultPlace"))
  );
  const [sido, setSido] = useState(defaultPlace[0]);
  const [station, setStation] = useState(defaultPlace[1]);
  const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [pmgrade, setPmgrade] = useState("");
  const [color, setColor] = useState("#666666");
  const [loadStatus, setLoadStatus] = useState(false);

  const fetchData = async () => {
    setLoadStatus(true);
    const res = await getInfo(sido);
    setTimeout(() => {
      setData(res);
      const item = res.response.body.items.find((data) => {
        return data.sidoName === sido;
      });
      const item2 = res.response.body.items.find((data) => {
        return data.stationName === station;
      });
      setTime(item.dataTime);
      setPmgrade(item2.pm10Grade);
      setLoadStatus(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (pmgrade === "1") setColor("#1e64ee");
    else if (pmgrade === "2") setColor("#00d500");
    else if (pmgrade === "3") setColor("#f95a20");
    else if (pmgrade === "4") setColor("#e73532");
  }, [pmgrade]);

  return (
    <div className={styles.box}>
      <h1 className={styles.header}>
        {defaultPlace.join(" ")} 미세먼지 농도는 다음과 같습니다
      </h1>
      <h2 className={styles.time}>{time} 기준</h2>
      <Container width="40%" align="center">
        <h3 className={styles.station}>{defaultPlace.join(" ")}</h3>
        <h4>현재 미세먼지 농도는</h4>
        <h5
          style={{
            color: color,
          }}
        >
          {pmgrade
            ? ["좋음", "보통", "나쁨", "매우나쁨"][pmgrade - 1]
            : "측정중"}
        </h5>
      </Container>
      {loadStatus && <Load />}
    </div>
  );
};

export default Main;
