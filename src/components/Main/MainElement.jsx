import React, { useEffect, useState } from "react";
import styles from "./MainElement.module.scss";
import Load from "../UI/Load";
import Container from "../UI/Container";
import Progressbar from "./Progressbar";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../store/cartItemSlice";
import expressionChange from "../../utils/expressionChange";
import Select from "../UI/Select";
import { getSidoInfo } from "../../api/api";
import Button from "../UI/Button";

const MainElement = ({
  data,
  likeIcon,
  setlikeIcon,
  color,
  loadStatus,
  setLoadStatus,
  pmgrade,
  mainSido,
  mainStation,
  setMainSido,
  setMainStation,
}) => {
  const [sido, setSido] = useState("");
  const [station, setStation] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (likeIcon === true) {
      dispatch(addItem({ location: `${mainSido} ${mainStation}` }));
    } else {
      dispatch(deleteItem(`${mainSido} ${mainStation}`));
    }
  }, [likeIcon]);

  useEffect(() => {
    getSidoInfo(sido, setLoadStatus, setStation);
  }, [sido]);

  const selectSido = (input) => {
    setSido(input);
    setSelectedStation("");
  };

  const selectStation = (input) => {
    setSelectedStation(input);
  };

  const handleClick = () => {
    setMainSido(sido);
    setMainStation(selectedStation);
  };

  return (
    <section className={styles.box}>
      <h1 className={styles.header}>
        {`${mainSido} ${mainStation} 미세먼지 농도는 다음과 같습니다`}
      </h1>
      <h2 className={styles.time}>{data.dataTime} 기준</h2>
      <div className={styles.selectBox}>
        <Select selectSido={selectSido} stations={[]} />
        {station.length !== 0 && (
          <Select selectStation={selectStation} stations={station} />
        )}
        <Button onClick={handleClick} disabled={!sido}>
          검색
        </Button>
      </div>
      <Container align="center">
        <div onClick={() => setlikeIcon(!likeIcon)} className={styles.like}>
          {likeIcon ? (
            <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </div>
        <h3 className={styles.station}>{`${mainSido} ${mainStation}`}</h3>
        <h4>현재 미세먼지 농도는</h4>
        <div className={styles.expression} style={{ color: color }}>
          {expressionChange(pmgrade)}
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
