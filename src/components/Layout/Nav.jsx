import React, { useState } from "react";
import NavTab from "./NavTab";
import styles from "./Nav.module.scss";
import { Outlet } from "react-router";

const NavTabs = ({ setNavStatus }) => {
  return (
    <nav>
      <ul className={styles.container}>
        <NavTab content={"메인페이지"} setNavStatus={setNavStatus}>
          <i className="fa-solid fa-house"></i>
        </NavTab>
        <NavTab content={"먼지순위"} setNavStatus={setNavStatus}>
          <i className="fa-solid fa-ranking-star"></i>
        </NavTab>
        <NavTab content={"즐겨찾기"} setNavStatus={setNavStatus}>
          <i className="fa-solid fa-heart"></i>
        </NavTab>
        <NavTab content={"정보변경"} setNavStatus={setNavStatus}>
          <i className="fa-solid fa-map-location-dot"></i>
        </NavTab>
      </ul>
    </nav>
  );
};

const Nav = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <>
      <Outlet />
      {navStatus ? (
        <NavTabs setNavStatus={setNavStatus} />
      ) : (
        <div className={`${styles.arrow} ${styles.bounce}`}>
          <i
            className="fa-solid fa-chevron-up"
            onClick={() => {
              setNavStatus(true);
            }}
          ></i>
        </div>
      )}
    </>
  );
};

export default Nav;
