import React, { useEffect, useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const TodoCard = () => {
  const [task, setTask] = useState([]);

  const handleAddButtonClick = () => {
    setTask([...task, { name: "", state: "TODO" }]);
  };

  //refはAtoms/Inputから受け取っているつもり
  const initialFocus = () => {
    useEffect((ref) => {
      ref.current.blur();
    }, []);
  };

  //onLoad(=ページ読み込み時)にLocalStorageから値を持ってきているつもり
  const taskArray = task
    .map(({ name, state }, index) => {
      if (state === "TODO") {
        return (
          <Task
            key={index}
            onLoad={() => {
              const data = JSON.parse(localStorage.getItem("taskData"));
              if ("taskData" === undefined) {
                data = null;
              }

              setTask([...data]);
            }}
            checked={() => {
              let taskCopied = [...task];
              taskCopied[index].state = "DONE";
              setTask(taskCopied);
            }}
            taskName={name}
            onEditComplete={(name) => {
              let taskCopied = [...task];
              if (name === "") {
                taskCopied = taskCopied.filter((_, i) => {
                  return index !== i;
                });
              } else {
                taskCopied[index].name = name;
              }
              setTask(taskCopied);

              localStorage.setItem("taskData", JSON.stringify(taskCopied));
            }}
            focus={initialFocus()}
          />
        );
      } else {
        return null;
      }
    })
    .filter((value) => {
      return value !== null;
    });

  return (
    <TodoContainer>
      <AddTaskButton checked={handleAddButtonClick} />
      <TasksContainer>{taskArray}</TasksContainer>
    </TodoContainer>
  );
};
export default TodoCard;

const TodoContainer = styled.div`
  width: 100%;
  padding: 22px 26px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  margin-top: 20px;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    width: 500px;
  }
`;
const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 6px 20px;
  gap: 10px;
`;
