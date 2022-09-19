import React from "react";
import { jsx, css } from "@emotion/styled";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const Alert = ({ errotText }) => {
  if (errotText === "") {
    return;
  } else {
    return (
      <Container>
        <AlertContainer className={attachClass()}>
          <AlertText>{alertText}</AlertText>
        </AlertContainer>
      </Container>
    );
  }
};
export default Alert;

//hoverの時を思い出して一番外側の要素をあえて作ったが...
const Container = styled.div`
  transition: 2s;
`;

//開始位置と出てくる位置の数値と、どう書くかが不明　Figmaのどこにある...?
const fadeIn = styled.css`
  opacity: 1;
  left: 20px;
  top: 40px;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    left: 520px;
    top: 80px;
  }
`;
const fadeOut = styled.css`
  opacity: 0;
`;
const AlertContainer = styled.div`
  width: 400px;
  background-color: ${COLOR.RED};
  border-radius: 4px;
  padding: 10px 20px;
`;
const AlertText = styled.p`
  color: ${COLOR.WHITE};
  margin: 0px;
`;
