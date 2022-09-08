import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";

const Pages = () => {
  return (
    <PagesContainer>
      <Title />
      <TodoCard />
    </PagesContainer>
  );
};
export default Pages;

const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
