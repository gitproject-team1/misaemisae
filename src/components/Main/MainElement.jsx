import React, { useState } from "react";
import styles from "./MainElement.module.scss";
import Load from "../UI/Load";
import Container from "../UI/Container";
import Progressbar from "./Progressbar";

const MainElement = ({
  defaultPlace,
  data,
  likeIcon,
  setlikeIcon,
  color,
  loadStatus,
  pmgrade,
}) => {
  const [cartArr, setcartArr] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [],
  );

  return (
    <section className={styles.box}>
      <h1 className={styles.header}>
        {defaultPlace.join(" ")} 미세먼지 농도는 다음과 같습니다
      </h1>
      <h2 className={styles.time}>{data.dataTime} 기준</h2>
      <Container align="center">
        <div
          onClick={() => {
            setlikeIcon(!likeIcon);
            let data = [...cartArr];
            data.push(defaultPlace.join(" "));
            data = new Set(data);
            setcartArr([...data]);
            localStorage.setItem("favorites", JSON.stringify([...data]));
          }}
          className={styles.like}
        >
          {likeIcon ? (
            <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </div>
        <h3 className={styles.station}>{defaultPlace.join(" ")}</h3>
        <h4>현재 미세먼지 농도는</h4>
        <div className={styles.expression} style={{ color: color }}>
          {pmgrade ? (
            [
              <i className="fa-regular fa-face-smile"></i>,
              <i className="fa-regular fa-face-meh"></i>,
              <i className="fa-regular fa-face-frown"></i>,
              <i className="fa-regular fa-face-dizzy"></i>,
            ][pmgrade - 1]
          ) : (
            <i className="fa-regular fa-face-meh-blank"></i>
          )}
        </div>
        <h5
          style={{
            color: color,
          }}
        >
          {pmgrade
            ? ["좋음", "보통", "나쁨", "매우나쁨"][pmgrade - 1]
            : "측정중"}
        </h5>
        <Progressbar pm="미세먼지" value={data.pm10Value}></Progressbar>
        <Progressbar pm="초미세먼지" value={data.pm25Value}></Progressbar>
      </Container>
      {loadStatus && <Load />}
    </section>
  );
};

export default MainElement;
