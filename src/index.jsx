import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/Pages/MainPage";
import AlertManager from "../src/components/Organisms/AlertManager";
import { AlertHandlerProvider } from "../src/contexts/alert_handler";
import "./style.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <AlertManager />
    <MainPage />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
