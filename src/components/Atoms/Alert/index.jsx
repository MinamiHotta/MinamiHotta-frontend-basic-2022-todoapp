import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ errorText, visible }) => {
  return (
    <AlertContainer className={visible ? "nowAppear" : ""}>
      <AlertText>{errorText}</AlertText>
    </AlertContainer>
  );
};
export default Alert;

const AlertContainer = styled.div`
  position: absolute;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0px 20px;
  transition: 0.5s;
  opacity: 0;
  top: 40px;
  transform: translateY(-20px);
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    top: 80px;
    width: 400px;
  }
  &.nowAppear {
    opacity: 1;
    transform: none;
  }
`;
const AlertText = styled.p`
  color: ${COLOR.WHITE};
  margin: 0px;
`;
