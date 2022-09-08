import { useState } from "react";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

//Advice1:タスクの追加と表示で分ける
//Advice2:ボタンが押されたら、molecules/taskに書いてあるようにchecked, taskName, onEditCompleteが何なのかを記した連想配列を追加する

const TodoCard = () => {
  const handleAddButtonClick = () => {
    //デフォルト編集中を表すpropsにtrueを渡す
    stateEditButton();

    //タスク名と状態のオブジェクト
    const [task, setTask] = useState({ name: taskName, state: "TODO" }, []);
  };
  //Inputの<Checkbox checked={checked}と紐づけたい
  const doneTask = ({ checked }) => {
    setTask((task.state = "DONE"));
  };

  //状態がTODOのものを抽出した配列
  const taskArray = task.filter(({ state }) => {
    return state === "TODO";
  });

  //Moleculesのstory.jsxを参考にしている、どうonEditCompleteを受け渡せばよいのか？
  const onEditComplete = ({ taskName, setNowOnEdit }) => {
    //仮のconsole.log
    console.log(`taskname changed ${taskName}`);

    setTask((task.name = taskName));
    //タスク名が空だったら～のケース
    if (taskName === null) {
      setTask((task.state = "DONE"));
    }
    setNowOnEdit(false);
  };

  //{nowOnEdit?(<Input/>):}のようにreturn内にjs配置するのか？
  return (
    <>
      <AddTaskButton onClick={handleAddButtonClick} />
      <TasksContainer>
        <Task>{taskArray}</Task>
      </TasksContainer>
    </>
  );
};
export default TodoCard;

const TasksContainer = styled.div``;
