import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";
//hover時に上下中央に☑があるように

const Checkbox = () => {
  return (
    <StyledBox>
      <HoverCheck src={check} />
    </StyledBox>
  );
};
export default Checkbox;

const StyledBox = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
`;

const HoverCheck = styled.Img`
  align-items: center;
`;
