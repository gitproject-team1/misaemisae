import React, { useEffect, useState } from "react";
import Container from "../../components/UI/Container";
import styles from "./Rank.module.scss";
import getInfo from "../../api/requests";
import RankElement from "../../components/RankElement/RankElement";

const Rank = () => {
  const [average10, setAverage10] = useState([]);
  const [average25, setAverage25] = useState([]);

  let sidoName = [
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

  const getSidoInfo = async () => {
    const promises = [];
    sidoName.forEach((sido) => {
      const res = getInfo(sido);
      promises.push(res);
    });
    // promse.all로 한번에 받아오기
    let promiseRes = await Promise.all(promises);
    promiseRes.forEach((sido, i) => {
      let stationCount = 0;
      let pm10Sum = 0;
      let pm25Sum = 0;
      sido.response.body.items.forEach((station) => {
        if (station.pm10Value !== "-") {
          stationCount++;
          pm10Sum += Number(station.pm10Value);
        }
        if (station.pm25Value !== "-") {
          pm25Sum += Number(station.pm25Value);
        }
      });
      setAverage10((prevState) => [
        ...prevState,
        [i, sidoName[i], parseInt(pm10Sum / stationCount)],
      ]);
      setAverage25((prevState) => [
        ...prevState,
        [i, sidoName[i], parseInt(pm25Sum / stationCount)],
      ]);
    });
    console.log(average10, average25);
  };

  useEffect(() => {
    getSidoInfo();
  }, []);

  return (
    <section className={styles.rankContainer}>
      <Container align="center">
        <h1>주요 도시별 미세먼지 농도 순위</h1>
        {average10.length === 0 &&
          sidoName.map((element, i) => {
            return (
              <RankElement
                sido={element}
                index={i}
                pm10={"-"}
                pm25={"-"}
                key={i}
              />
            );
          })}
        {average10.map((element, i) => {
          console.log(element);
          return (
            <RankElement
              sido={element[1]}
              index={element[0]}
              pm10={element[2]}
              pm25={average25[i][2]}
              key={i}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default Rank;
