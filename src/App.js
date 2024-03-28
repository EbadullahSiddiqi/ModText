import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, changeMode] = useState("light");
  function changeTheme() {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "#262727";
      document.body.style.color = "white";
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} changeTheme={changeTheme} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextArea heading="Enter the text to Analyze" mode={mode} />
            }
          ></Route>

          <Route exact path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
