import React from "react";
import { useState } from "react";

export default function AddTask(props) {
  const { handleAddTask } = props;
  const [taskValue, setTaskValue] = useState('')
  return (
    <header>
      <input type="text" value={taskValue} onChange={(event) => {
        setTaskValue(event.target.value)
      }} placeholder="Task Title..." />
      <button
        onClick={() => {
          handleAddTask(taskValue);
          setTaskValue('')
        }}
      >
        Add Task
      </button>
    </header>
  );
}
