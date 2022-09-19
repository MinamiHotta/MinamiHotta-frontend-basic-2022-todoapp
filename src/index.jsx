import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import "./style.css";

ReactDOM.render(
  <AlertHandler id="temporaryAlert">
    <MainPage />
  </AlertHandler>,
  document.getElementById("app")
);
