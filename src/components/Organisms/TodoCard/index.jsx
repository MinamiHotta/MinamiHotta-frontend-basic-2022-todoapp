import { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

let TaskState = ["TODO", "DONE"];

const onEditComplete = ({ taskName, setNowOnEdit }) => {
  //以下4行の内容は重複がある...?
  const [task, setTask] = useState({
    name: taskName,
    state: TaskState[0],
  });
  setTask(task);
  setNowOnEdit(false);

  //stateはuseStateというオブジェクト内のstateに紐づいていない?
  //AddTaskButton　onClickの記述と、前後関係的に大丈夫か?
  //やりたいこと:filter関数によってtaskDoneという配列に入れられたタスクが、Taskとして表示されるようにしたい=>27行目の{taskDone}の記述が不十分、<Task/>という要素をどこかに入れたい
  const taskDone = useState.filter(({ state }) => {
    return state === "TODO";
  });
  return (
    <TodoCard>
      <AddTaskButton
        onClick={useState({ name: taskName, state: TaskState[1] })}
      />
      <TasksContainer>{taskDone}</TasksContainer>
    </TodoCard>
  );
};
const TodoCard = styled.div``;
