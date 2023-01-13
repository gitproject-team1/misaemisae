import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./App.css";

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
