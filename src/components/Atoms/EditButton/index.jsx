import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <HoverCircle />
      <Img src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const Img = styled.img`
  width: 15px;
  height: 15px;
  top: 10px;
`;

const HoverCircle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${COLOR.LIGHT_GRAY};
  opacity: 0;
  transition: 0.2s;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  &:hover > ${HoverCircle} {
    opacity: 0.2;
    cursor: pointer;
  }
`;
//OPTIMIZE:どこまでコンポーネントに分けるべきか

//FIXME:hover時だけでなく常に表示されてしまう、HoverCircleもexportすべき？
