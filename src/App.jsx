import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Main from "./pages/Main/Main";
import Nav from "./components/Layout/Nav";
import Cart from "./pages/Cart/Cart";
import Rank from "./pages/Rank/Rank";
import "./App.scss";

function App() {
  // 저장되어있으면, welcome페이지로 가지 않음
  const defaultPlace = localStorage.getItem("defaultPlace");
  let placeArr = ["", ""];
  if (defaultPlace !== null) {
    placeArr = JSON.parse(defaultPlace);
  }

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (placeArr[1].length !== 0 && location.pathname === "/") {
      navigate("/main");
    }
  }, []);

  return (
    // 회의필요...
    <>
      <Routes>
        {placeArr[1].length === 0 && <Route index element={<Welcome />} />}
        <Route element={<Nav />}>
          <Route path="/main" element={<Main />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
