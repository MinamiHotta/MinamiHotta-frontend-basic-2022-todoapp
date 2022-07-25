import styled from "styled-components";

import React from "react";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

//*
const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXT.M}
  font-family: ${FONTFAMILY.ROBOTO};
  @media screen(min-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.L}
  }
`;

//Titleコンポーネントの定義
//React コンポーネントと HTML 要素は同列に扱うことができる
//例：div をStyledTextに変えた
