import { useState } from "react";
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"


function App() {

 
  const [tasks, setTasks] = useState(["1", "2", "3"]);

  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }

  function handleDeleteTask (index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    })
    setTasks(newTaskList);
  }

  function handleEditTask (taskIndex) {

  }

  return (
    <>
      <AddTask handleAddTask={handleAddTask} />
      <TaskList handleDeleteTask={handleDeleteTask} tasks={tasks}/>
    </>
  )
}

export default App
