//今回は css ファイルを作成せず、React のプラグインである styled-components を利用します。
import styled from "styled-components";

import React from "react";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
//Titleコンポーネントの定義
//nullの部分はあとでJSX形式で記述されたDOM要素を返す
//React コンポーネントと HTML 要素は同列に扱うことができます
//例：div をStyledTextに変えた
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
