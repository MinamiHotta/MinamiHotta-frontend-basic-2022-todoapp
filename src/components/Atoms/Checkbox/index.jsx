import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const Checkbox = ({ checked }) => {
  return (
    <StyledBox onClick={checked}>
      <HoverCheck src={check} />
    </StyledBox>
  );
};
export default Checkbox;

const HoverCheck = styled.img`
  align-items: center;
  opacity: 0;
  transition: 0.2s;
`;

const StyledBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  &:hover > ${HoverCheck} {
    opacity: 1;
    cursor: pointer;
  }
`;
