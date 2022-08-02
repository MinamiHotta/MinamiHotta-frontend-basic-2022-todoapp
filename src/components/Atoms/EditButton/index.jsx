import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const EditButton = ({checked}) => {
  return (
    <StyledButton onClick={checked}>
      <HoverCircle />
      <Img src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const Img = styled.img`
  display: absolute;
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
  transition:0.2s;
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
  &:hover > ${HoverCircle}{
    opacity:0.2;
  }
`;
//OPTIMIZE:どこまでコンポーネントに分けるべきか

//FIXME:hover時だけでなく常に表示されてしまう、HoverCircleもexportすべき？
