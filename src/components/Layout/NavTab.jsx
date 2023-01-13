import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavTab.module.scss";

const NavTab = ({ children, content }) => {
  return (
    <Link to="/main" className={styles.item}>
      <li>
        {children}
        {content}
      </li>
    </Link>
  );
};

export default NavTab;
