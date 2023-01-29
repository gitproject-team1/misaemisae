import React, { useState, useEffect } from "react";
import MainElement from "../../components/Main/MainElement";
import { useSelector } from "react-redux";
import { fetchData } from "../../api/api";
import colorChange from "../../utils/colorChange";

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
  const [isError, setIsError] = useState("");

  const state = useSelector((state) => state);

  useEffect(() => {
    {
      state.cartItem?.map((data) => {
        if (data.location === defaultPlace.join(" ")) setlikeIcon(true);
      });
    }
  }, []);

  useEffect(() => {
    fetchData(sido, station, setData, setPmgrade, setLoadStatus, setIsError);
  }, []);

  useEffect(() => {
    colorChange(pmgrade, setColor);
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
export { fetchData };
