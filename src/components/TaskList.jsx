import React from "react";
import TaskSlot from "./TaskSlot";

export default function TaskList(props) {
  const { tasks } = props;

  return (
    <ul className="main">
      {tasks.map((task) => (
        <TaskSlot {...props} key={task.id} task={task} />
      ))}
    </ul>
  );
}
