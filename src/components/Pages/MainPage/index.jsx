import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

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
`;
