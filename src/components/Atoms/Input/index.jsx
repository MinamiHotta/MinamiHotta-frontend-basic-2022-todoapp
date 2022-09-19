import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({
  defaultValue = "",
  onEditComplete,
  defaultFocused = false,
}) => {
  const ref = useRef(null);
  useEffect((defaultFocused) => {
    if (defaultFocused === true) {
      ref.current.blur();
    } else {
      ref.current.focus();
    }
    ref.current.value = defaultValue;
    ref.current.onblur = (e) => onEditComplete(e.target.value);
    ref.current.onkeypress = (e) => {
      if (e.key === "Enter") onEditComplete(e.target.value);
    };
  }, []);

  return <StyledInput ref={ref} defaultValue={defaultValue} />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  background-color: ${COLOR.BLACK};
  padding: 0px 4px;
  border: none;
  border-radius: 2px;
  outline: 0;
`;
