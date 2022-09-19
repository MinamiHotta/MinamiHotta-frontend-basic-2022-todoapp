import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();

  if (AlertHandlerContext.visible === true) {
    AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
    startAlert();
  }

  startAlert = () => {
    document.getElementsById("temporaryAlert").style.display = "block";
    setTimeout(closeAlert, 5000);
  };
  closeAlert = () => {
    document.getElementsById("temporaryAlert").style.display = "none";
  };
};
export default AlertManager;
