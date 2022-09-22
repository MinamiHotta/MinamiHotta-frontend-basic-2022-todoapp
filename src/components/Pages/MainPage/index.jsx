import React from "react";
import styled from "styled-components";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import Title from "../../Atoms/Title";
import AlertManager from "../../Organisms/AlertManager";
import TodoCard from "../../Organisms/TodoCard";

const MainPage = () => {
  return (
    <AlertHandlerProvider>
      <Container>
        <AlertManager />
        <Title />
        <TodoCard />
      </Container>
    </AlertHandlerProvider>
  );
};
export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;
