import React, { useState, useEffect } from "react";
import getInfo from "../../api/requests";
import Container from "../../components/UI/Container";
import styles from "./Main.module.scss";

const Main = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [defaultPlace, setDefaultPlace] = useState(JSON.parse(localStorage.getItem("defaultPlace")));
  const [sido, setSido] = useState(defaultPlace[0]);
  const [station, setStation] = useState(defaultPlace[1]);
  const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [pmgrade, setPmgrade] = useState("");

  const fetchData = async () => {
    const res = await getInfo(sido);
    setData(res);
    const item = res.response.body.items.find((data) => {
      return data.sidoName === sido;
    });
    const item2 = res.response.body.items.find((data) => {
      return data.stationName === station;
    });
    setTime(item.dataTime);
    setPmgrade(item2.pm10Grade);
  };

  return (
    <div className={styles.box}>
      <h1 className={styles.header}>{defaultPlace.join(" ")} 미세먼지 농도는 다음과 같습니다</h1>
      <h2 className={styles.time}>{time} 기준</h2>
      <Container width="60%">
        <h3 className={styles.station}>{defaultPlace.join(" ")}</h3>
        <h4>현재의 대기질 지수는</h4>
        <h5>{["좋음", "보통", "나쁨", "매우나쁨"][pmgrade - 1]}</h5>
      </Container>
    </div>
  );
};

export default Main;
