import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.scss";
import Select from "../../components/UI/Select";
import Button from "../../components/UI/Button";
import getInfo from "../../api/requests";
import Load from "../../components/UI/Load";
import { Link } from "react-router-dom";
import { getSidoInfo } from "../../api/api";

const Welcome = () => {
  // 최종 검색정보는 sido와 selectedStation에 들어있음.
  const [sido, setSido] = useState("");
  const [station, setStation] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [loadStatus, setLoadstatus] = useState(false);

  useEffect(() => {
    getSidoInfo(sido, setLoadstatus, setStation);
  }, [sido]);

  useEffect(() => {
    if (selectedStation === "") {
      let placeArr = JSON.stringify([sido, station[0]]);
      if (!station[0])
        localStorage.setItem("defaultPlace", JSON.stringify([sido, ""]));
      else localStorage.setItem("defaultPlace", placeArr);
    } else {
      let placeArr = JSON.stringify([sido, selectedStation]);
      localStorage.setItem("defaultPlace", placeArr);
    }
  }, [sido, station, selectedStation]);

  // 로컬스토리지에 저장
  // useEffect(() => {}, [selectedStation]);

  const selectSido = (input) => {
    setSido(input);
    setSelectedStation("");
  };

  const selectStation = (input) => {
    setSelectedStation(input);
  };

  return (
    <div className={styles.container}>
      <i className="fa-brands fa-skyatlas"></i>
      <br />
      미세먼지에 관한 모든 것.
      <h1>미세미세</h1>
      <p>원하는 지역을 골라주세요!</p>
      <span>기본지역으로 설정됩니다.</span>
      <div className={styles.selectBox}>
        <Select selectSido={selectSido} stations={[]} />
        {station.length !== 0 && (
          <Select selectStation={selectStation} stations={station} />
        )}
      </div>
      {station.length !== 0 && (
        <Link to="/main">
          <Button>검색</Button>
        </Link>
      )}
      {loadStatus && <Load />}
    </div>
  );
};

export default Welcome;
