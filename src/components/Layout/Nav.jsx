import React from "react";
import NavTab from "./NavTab";
import styles from "./Nav.module.scss";
import { Outlet } from "react-router";

const Nav = () => {
  return (
    <>
      <Outlet />
      <nav>
        <ul className={styles.container}>
          <NavTab content={"정보변경"}>
            <i className="fa-solid fa-map-location-dot"></i>
          </NavTab>
          <NavTab content={"먼지순위"}>
            <i className="fa-solid fa-ranking-star"></i>
          </NavTab>
          <NavTab content={"즐겨찾기"}>
            <i className="fa-solid fa-heart"></i>
          </NavTab>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
