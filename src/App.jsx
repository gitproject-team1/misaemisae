import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
