import React, { useState } from "react";
import styles from "./Cart.module.scss";
import Container from "../../components/UI/Container";

const Cart = () => {
  const [likeIcon, setlikeIcon] = useState(true);

  return (
    <section className={styles.box}>
      <h1>등록된 즐겨찾기</h1>
      <Container>
        <div className={styles.left_box}>
          <div
            onClick={() => {
              setlikeIcon(!likeIcon);
            }}
            className={styles.like}
          >
            {likeIcon ? (
              <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <h2>충남 성성동</h2>
        </div>
        <div className={styles.status}>
          <i className="fa-regular fa-face-smile"></i>
          <p>좋음</p>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
