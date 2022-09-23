import React from "react";
import { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import styled from "styled-components";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (!AlertHandlerContext.visible) {
      return;
    }
    setTimeout(AlertHandlerContext.closeAlert, 5000);
  }, [AlertHandlerContext]);

  return (
    <Container>
      <Alert
        errorText={AlertHandlerContext.errorText}
        visible={AlertHandlerContext.visible}
      />
    </Container>
  );
};
export default AlertManager;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
