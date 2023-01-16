import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavTab.module.scss";

const NavTab = ({ children, content, setNavStatus }) => {
  const navigate = useNavigate();

  let link = "";
  const handleNavClick = () => {
    setNavStatus(false);
    if (content === "정보변경") {
      localStorage.removeItem("defaultPlace");
      navigate("/");
    } else if (content === "즐겨찾기") {
      navigate("/");
    } else if (content === "먼지순위") {
      navigate("/rank");
    } else if (content === "메인페이지") {
      navigate("/main");
    }
  };

  return (
    <div className={styles.item} onClick={handleNavClick}>
      <li>
        {children}
        {content}
      </li>
    </div>
  );
};

export default NavTab;
