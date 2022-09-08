import { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";

const TodoCard = () => {
  const [task, setTask] = useState([]);

  const handleAddButtonClick = () => {
    setTask([...task, { name: "", state: "TODO" }]);
  };

  const taskArray = task
    .filter(({ state }) => {
      return state === "TODO";
    })
    .map(({ name }, index) => (
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
              return index != i;
            });
          } else {
            taskCopied[index].name = name;
          }
          setTask(taskCopied);
        }}
      />
    ));

  return (
    <TodoContainer>
      <AddTaskButton checked={handleAddButtonClick} />
      <TasksContainer>{taskArray}</TasksContainer>
    </TodoContainer>
  );
};
export default TodoCard;

const TodoContainer = styled.div`
  width: 500px;
  padding: 22px 26px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;
const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 6px 20px;
  gap: 10px;
`;
