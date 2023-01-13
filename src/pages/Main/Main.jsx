import React, { useState, useEffect } from "react";
import getInfo from "../../api/requests";
import styles from "./Main.module.scss";

const Main = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [defaultPlace, setDefaultPlace] = useState(JSON.parse(localStorage.getItem("defaultPlace")));
  const [sido, setSido] = useState(defaultPlace[0]);
  const [time, setTime] = useState("");

  const fetchData = async () => {
    const res = await getInfo(sido);
    const time = res.response.body.items.find((data) => {
      return data.sidoName === sido;
    });
    setTime(time.dataTime);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{defaultPlace.join(" ")} 미세먼지 농도는 다음과 같습니다</h2>
      <h3 className={styles.time}>{time} 기준</h3>
    </div>
  );
};

export default Main;
