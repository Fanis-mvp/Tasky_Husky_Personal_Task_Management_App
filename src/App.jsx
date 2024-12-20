import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [filter, setFilter] = useState('All')
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  function persistData(newList) {
    localStorage.setItem("tasks", JSON.stringify({ tasks: newList }));
  }

  function handleAddTask(taskTitle, taskDescription) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      done: false,
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

  function handleToggleTaskDone(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    persistData(updatedTasks);
    setTasks(updatedTasks);
  }

  function handleFilterChange(event) {
    setFilter(event.target.value)
  }

  useEffect(() => {
    if (!localStorage) return;

    const localTasks = localStorage.getItem("tasks");
    if (!localTasks) return;

    setTasks(JSON.parse(localTasks).tasks);
  }, []);

  return (
    <>
    <header>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </header>

      <AddTask
        handleAddTask={handleAddTask}
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
      />
      <TaskList
        handleDeleteTask={handleDeleteTask}
        tasks={filteredTasks}
        handleEditTask={handleEditTask}
        handleToggleTaskDone={handleToggleTaskDone}
      />
    </>
  );
}

export default App;
