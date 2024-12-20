import { useState, useEffect } from "react";
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"


function App() {

 
  const [tasks, setTasks] = useState(["1", "2", "3"]);

  const [taskValue, setTaskValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('tasks', JSON.stringify({ tasks: newList}))
  }

  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask];
    persistData(newTaskList)
    setTasks(newTaskList);
  }

  function handleDeleteTask (index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    })
    persistData(newTaskList)
    setTasks(newTaskList);
  }

  function handleEditTask (taskIndex) {
    const valueToBeEdited = tasks[taskIndex]
    setTaskValue(valueToBeEdited)
    handleDeleteTask(taskIndex)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTasks = localStorage.getItem('tasks');
    if (!localTasks) {
      return
    }

    localTasks = JSON.parse(localTasks).tasks
    setTasks(localTasks)


  }, [])
  
  return (
    <>
      <AddTask handleAddTask={handleAddTask} taskValue={taskValue} setTaskValue={setTaskValue} />
      <TaskList handleDeleteTask={handleDeleteTask} tasks={tasks} handleEditTask={handleEditTask}/>
    </>
  )
}

export default App
