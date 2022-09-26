import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ checked, taskName, onEditComplete, defaultFocused }) => {
  const [nowOnEdit, setNowOnEdit] = useState(defaultFocused);

  const stateEditButton = () => {
    setNowOnEdit(true);
  };

  return (
    <EachTaskWrapper>
      <Checkbox checked={checked} />
      <TaskContainer>
        {nowOnEdit ? (
          <Input
            defaultValue={taskName}
            onEditComplete={(taskName) => {
              onEditComplete(taskName);
              setNowOnEdit(false);
            }}
          />
        ) : (
          <TextContainer>
            <TaskText>{taskName}</TaskText>
            <EditButton onClick={stateEditButton} />
          </TextContainer>
        )}
      </TaskContainer>
    </EachTaskWrapper>
  );
};
export default Task;

const EachTaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TaskContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const TaskText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
  margin: 0px;
`;
