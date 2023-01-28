import React, { useState } from "react";
import styles from "./Cart.module.scss";
import Container from "../../components/UI/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addItem, deleteItem } from "../../store/cartItemSlice";

const Cart = () => {
  const [location, setLocation] = useState("");
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteItem(location));
  }, [location]);

  return (
    <section className={styles.box}>
      <h1>등록된 즐겨찾기</h1>
      {state.cartItem.map((data, index) => (
        <Container key={index}>
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
        </Container>
      ))}
    </section>
  );
};

export default Cart;
