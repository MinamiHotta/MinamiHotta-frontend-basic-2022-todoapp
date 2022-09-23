import React from "react";
import styled from "styled-components";
// import { AlertHandlerProvider } from "../../../contexts/alert_handler";
import Title from "../../Atoms/Title";
// import AlertManager from "../../Organisms/AlertManager";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    //<AlertHandlerProvider>
    //<AlertManager />はContainerの中にあった

    <Container>
      <Title />
      <TodoCard />
    </Container>
    //</AlertHandlerProvider>
  );
};
export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;
