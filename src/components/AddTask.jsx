import React from "react";

export default function AddTask(props) {
  const {
    handleAddTask,
    taskTitle,
    setTaskTitle,
    taskDescription,
    setTaskDescription,
  } = props;

  return (
    <header>
      <input
        type="text"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
        placeholder="Add Task Title..."
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.target.value)}
        placeholder="Add Task Description..."
      />
      <button
        onClick={() => {
          handleAddTask(taskTitle, taskDescription);
          setTaskTitle("");
          setTaskDescription("");
        }}
      >
        Add Task
      </button>
    </header>
  );
}
