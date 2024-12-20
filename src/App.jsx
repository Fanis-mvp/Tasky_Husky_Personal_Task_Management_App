import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description 1", done: false },
    { id: 2, title: "Task 2", description: "Description 2", done: false },
    { id: 3, title: "Task 3", description: "Description 3", done: false },
  ]);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function persistData(newList) {
    localStorage.setItem("tasks", JSON.stringify({ tasks: newList }));
  }

  function handleAddTask(taskTitle, taskDescription) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    const newTaskList = [...tasks, newTask];
    persistData(newTaskList);
    setTasks(newTaskList);
  }

  function handleDeleteTask(taskId) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    persistData(newTaskList);
    setTasks(newTaskList);
  }

  function handleEditTask(taskId) {
    const taskToEdit = tasks.find((task) => task.id === taskId);

    if (taskToEdit) {
      setTaskTitle(taskToEdit.title);
      setTaskDescription(taskToEdit.description);
      handleDeleteTask(taskId);
    }
  }

  useEffect(() => {
    if (!localStorage) return;

    const localTasks = localStorage.getItem("tasks");
    if (!localTasks) return;

    setTasks(JSON.parse(localTasks).tasks);
  }, []);

  return (
    <>
      <AddTask
        handleAddTask={handleAddTask}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <TaskList
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
        handleEditTask={handleEditTask}
      />
    </>
  );
}

export default App;
