import React from "react";
import styles from "./Progressbar.module.scss";

const Progressbar = ({ pm, value }) => {
  return (
    <div className={styles.dust}>
      <div>{pm}</div>
      <div>{value}</div>
      <div className="progress-bar">
        <span
          style={{
            width: `${(value / 200) * 100}%`,
            maxWidth: `${(value / 200) * 100}%`,
          }}
          className="active"
        ></span>
      </div>
    </div>
  );
};

export default Progressbar;
