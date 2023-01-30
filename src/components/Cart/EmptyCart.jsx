import React from "react";
import { Link } from "react-router-dom";
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <div className={styles.empty_container}>
      <i className="fa-solid fa-heart-circle-xmark"></i>
      <h2>즐겨찾기한 지역이 없습니다.</h2>
      <h3>
        원하는 지역에 하트 아이콘을 눌러 <br />
        즐겨찾기 목록을 만들어보세요.
      </h3>
      <Link to="/main">
        <button>메인페이지로 이동하기</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
