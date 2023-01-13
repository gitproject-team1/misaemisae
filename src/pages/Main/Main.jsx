import React, { useState, useEffect } from "react";
import getInfo from "../../api/requests";
import styles from "./Main.module.scss";

const Main = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [defaultPlace, setDefaultPlace] = useState(JSON.parse(localStorage.getItem("defaultPlace")));
  const sido = defaultPlace[0];
  console.log(sido);
  const fetchData = async (sido) => {
    const response = await getInfo(sido);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{defaultPlace.join(" ")} 미세먼지 농도는 다음과 같습니다</h2>
      <h3></h3>
    </div>
  );
};

export default Main;
