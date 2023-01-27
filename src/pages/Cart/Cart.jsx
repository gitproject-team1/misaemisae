import React, { useState } from "react";
import styles from "./Cart.module.scss";
import Container from "../../components/UI/Container";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const [likeIcon, setlikeIcon] = useState(true);
  const state = useSelector((state) => {
    return state;
  });

  // useEffect(() => {
  //   localStorage;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <section className={styles.box}>
      <h1>등록된 즐겨찾기</h1>
      {state.cartItem.map((data, index) => (
        <Container key={index}>
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
            <h2>{data.location}</h2>
          </div>
          <div className={styles.status}>
            <i className="fa-regular fa-face-smile"></i>
            <p>좋음</p>
          </div>
        </Container>
      ))}
    </section>
  );
};

export default Cart;
