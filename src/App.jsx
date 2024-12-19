import { useState } from "react";
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"


function App() {

 
  const [tasks, setTasks] = useState(["1", "2", "3"]);

  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }

  return (
    <>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
