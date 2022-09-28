import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  //Alertに表示する内容を指定し、Alertを開く関数
  const setAlert = (errorText) => {
    setAlertState({ visible: true, errorText: errorText });
  };

  //Alertを閉じる関数
  const closeAlert = () => {
    setAlertState({ visible: false, errorText: alertState.errorText });
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
