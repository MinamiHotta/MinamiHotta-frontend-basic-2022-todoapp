import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const AddTaskButton = ({ checked }) => {
  return (
    <StyledAddButton onClick={checked}>
      <Img src={plus} />
      <StyledAddText>タスクを追加</StyledAddText>
    </StyledAddButton>
  );
};
export default AddTaskButton;

const StyledAddButton = styled.button`
  display: flex;
  padding: 2px 6px;
  border-radius: 12px;
  background-color: transparent;
  border: none;
  transition: 0.2s;
  &:hover {
    background-color: rgba(70, 163, 129, 0.2);
    cursor: pointer;
  }
`;

const Img = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const StyledAddText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S}
`;
