import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteItem } from "../../store/cartItemSlice";
import CartElement from "../../components/Cart/CartElement";

const Cart = () => {
  const [location, setLocation] = useState("");
  const [loadStatus, setLoadStatus] = useState(false);
  // const [sido, setSido] = useState(defaultPlace[0]);
  // const [station, setStation] = useState(defaultPlace[1]);
  // const [data, setData] = useState("");
  const [pmgrade, setPmgrade] = useState("");

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteItem(location));
  }, [location]);

  // useEffect(() => {
  //   fetchData(sido, station, setData, setPmgrade, setLoadStatus, setIsError);
  // }, []);

  return (
    <section className={styles.box}>
      <h1>등록된 즐겨찾기</h1>
      {state.cartItem.map((data, index) => (
        <CartElement data={data} index={index} setLocation={setLocation} />
      ))}
    </section>
  );
};

export default Cart;
