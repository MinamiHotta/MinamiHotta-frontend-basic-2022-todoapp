import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const AddTaskButton = ({checked}) => {
  return (
    <StyledAddButton onClick={checked}>
      <HoverBack/>
      <Img src={plus} />
      <StyledAddText>タスクを追加</StyledAddText>
    </StyledAddButton>
  );
};
export default AddTaskButton;

const HoverBack = styled.div`
  background-color: ${COLOR.GREEN};
  opacity: 0;
`;
const StyledAddButton = styled.button`
  display:flex;
  width: 126px;
  height: 24px;
  padding: 2px 6px;
  border-radius: 12px;
  background-color:transparent;
  border:none;
  &:hover > ${HoverBack}{
    opacity: 0.2;
    cursor:pointer;
  }
`;

const Img = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  z-index:10;
`;

const StyledAddText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S}
  z-index:10;
`;


//TODO:新しくstyleを付加するには
