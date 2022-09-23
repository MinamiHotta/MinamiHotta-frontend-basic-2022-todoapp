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
  const [creating, setCreating] = useState(false);

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
    setCreating(true);
  };

  const taskArray = task
    .map(({ name, state }, index) => {
      if (state === "TODO") {
        return (
          <Task
            key={index}
            checked={() => {
              let taskCopied = [...task];
              taskCopied[index].state = "DONE";
              setTask(taskCopied);
              setCreating(false);
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
              }
              setTask(taskCopied);
            }}
            defaultFocused={false}
          />
        );
      } else {
        return null;
      }
    })
    .filter((value) => {
      return value !== null;
    });

  if (creating === true) {
    taskArray.push(
      <Task
        key={taskArray.length}
        checked={() => setCreating(false)}
        taskName=""
        onEditComplete={(taskName) => {
          if (taskName === "") {
            setCreating(false);
          } else {
            setTask([...task, { name: taskName, state: "TODO" }]);
            setCreating(false);
          }
        }}
        defaultFocused={true}
      />
    );
  }

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
