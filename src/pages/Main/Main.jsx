import React, { useState, useEffect } from "react";
import getInfo from "../../api/requests";
import MainElement from "../../components/Main/MainElement";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../store/cartItemSlice";

const Main = () => {
  const [defaultPlace, setDefaultPlace] = useState(
    JSON.parse(localStorage.getItem("defaultPlace")),
  );
  const [sido, setSido] = useState(defaultPlace[0]);
  const [station, setStation] = useState(defaultPlace[1]);
  const [data, setData] = useState("");
  const [pmgrade, setPmgrade] = useState("");
  const [color, setColor] = useState("#666666");
  const [loadStatus, setLoadStatus] = useState(false);
  const [likeIcon, setlikeIcon] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // useEffect(() => {
  //   if (likeIcon === false) dispatch(deleteItem(defaultPlace.join(" ")));
  // }, [likeIcon]);

  useEffect(() => {
    {
      state.cartItem?.map((data) => {
        if (data.location === defaultPlace.join(" ")) setlikeIcon(true);
      });
    }
  }, []);

  const fetchData = async () => {
    setLoadStatus(true);
    const res = await getInfo(sido);
    setTimeout(() => {
      const result = res.response.body.items.find((data) => {
        return data.stationName === station;
      });
      setData(result);
      setPmgrade(result.pm10Grade);
      setLoadStatus(false);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (pmgrade === "1") setColor("#1e64ee");
    else if (pmgrade === "2") setColor("#00d500");
    else if (pmgrade === "3") setColor("#f95a20");
    else if (pmgrade === "4") setColor("#e73532");
  }, [pmgrade]);

  return (
    <>
      <MainElement
        defaultPlace={defaultPlace}
        data={data}
        likeIcon={likeIcon}
        setlikeIcon={setlikeIcon}
        color={color}
        loadStatus={loadStatus}
        pmgrade={pmgrade}
      />
    </>
  );
};

export default Main;
