import React, { useEffect, useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const TodoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [task, setTask] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("taskData")) {
      setTask([]);
    } else {
      const data = JSON.parse(localStorage.getItem("taskData"));
      setTask([...data]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(task));
  }, [task]);

  const handleAddButtonClick = () => {
    setTask([...task, { name: "", state: "TODO", initial: true }]);
  };

  const taskArray = task
    .map(({ name, state, initial }, index) => {
      if (state === "TODO") {
        return (
          <Task
            key={index}
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

                AlertHandlerContext.setAlert(
                  "タスクの名前が設定されていません。"
                );
              } else {
                taskCopied[index].name = name;
                taskCopied[index].initial = false;
              }
              setTask(taskCopied);
            }}
            defaultFocused={initial}
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
  margin: 0px 6px;
`;
