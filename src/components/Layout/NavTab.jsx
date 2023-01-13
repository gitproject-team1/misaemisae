import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavTab.module.scss";

const NavTab = ({ children, content }) => {
  const navigate = useNavigate();

  let link = "";
  const handleNavClick = () => {
    if (content === "정보변경") {
      localStorage.removeItem("defaultPlace");
      navigate("/");
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
