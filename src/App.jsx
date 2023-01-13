import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Main from "./pages/Main/Main";
import "./App.scss";

function App() {
  // 저장되어있으면, welcome페이지로 가지 않음
  const defaultPlace = localStorage.getItem("defaultPlace");
  let placeArr = ["", ""];
  if (defaultPlace !== null) {
    placeArr = JSON.parse(defaultPlace);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (placeArr[1].length !== 0) {
      navigate("/main");
    }
  }, []);

  return (
    // 회의필요...
    <>
      <Routes>
        {placeArr[1].length === 0 && <Route index element={<Welcome />} />}
        <Route path="/main" index element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
