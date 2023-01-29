import React from "react";
import Container from "../UI/Container";
import styles from "./CartElement.module.scss";

const CartElement = ({ data, index, setLocation }) => {
  return (
    <article className={styles.container} key={index}>
      <div className={styles.left_box}>
        <div
          onClick={() => {
            setLocation(data.location);
          }}
          className={styles.delete}
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h2>{data.location}</h2>
      </div>
      <div className={styles.status}>
        <i className="fa-regular fa-face-smile"></i>
        <p>좋음</p>
      </div>
    </article>
  );
};

export default CartElement;
