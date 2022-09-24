import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <Container>
      <Title />
      <TodoCard />
    </Container>
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
