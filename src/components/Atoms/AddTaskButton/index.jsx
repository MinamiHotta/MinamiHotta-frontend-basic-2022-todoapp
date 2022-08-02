import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = () => {
  return (
    <StyledButton>
      <Img src={plus} />
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  );
};
export default AddTaskButton;

//TODO:背景はhover時に出現するように
const StyledButton = styled.button`
  width: 126px;
  height: 24px;
  padding: 2px;
  border-radius: 12px;
  background-color: ${COLOR.GREEN};
  opacity: 0.2;
`;

const Img = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StyledText = styled.div`
  color: ${COLOR.GREEN};
  ${SIZE.S};
`;

//TODO:新しくstyleを付加するには
