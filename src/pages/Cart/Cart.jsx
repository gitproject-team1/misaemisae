import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteItem } from "../../store/cartItemSlice";
import CartElement from "../../components/Cart/CartElement";
import EmptyCart from "../../components/Cart/EmptyCart";

const Cart = () => {
  const [location, setLocation] = useState("");
  const state = useSelector((state) => {
    return state;
  });
  console.log(state.cartItem);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteItem(location));
  }, [location]);

  return (
    <section className={styles.box}>
      <h1>등록된 즐겨찾기</h1>
      {state.cartItem.length === 0 ? <EmptyCart /> : null}
      {state.cartItem.map((value, index) => (
        <CartElement value={value} setLocation={setLocation} key={index} />
      ))}
    </section>
  );
};

export default Cart;
