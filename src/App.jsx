import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

  return (
    // 회의필요...
    <>
      <Routes>
        {placeArr[1].length === 0 && <Route index element={<Welcome />} />}
        <Route path="/" index element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
