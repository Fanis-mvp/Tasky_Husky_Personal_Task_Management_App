import React from "react";
import TaskSlot from "./TaskSlot";

export default function TaskList(props) {

    const {tasks} = props;

  return (
    <ul clasName="main">
      {tasks.map((task, taskIndex) => {
        return (
            <TaskSlot {...props} key={taskIndex} taskIndex={taskIndex}>
                <p>{task}</p>
            </TaskSlot>
        );
      })}
    </ul>
  );
}
