import React from "react";
import { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (!AlertHandlerContext.visible) {
      return;
    }
    setTimeout(AlertHandlerContext.closeAlert, 5000);
  }, [AlertHandlerContext]);

  return (
    <Alert
      errorText={AlertHandlerContext.errorText}
      visible={AlertHandlerContext.visible}
    />
  );
};
export default AlertManager;
