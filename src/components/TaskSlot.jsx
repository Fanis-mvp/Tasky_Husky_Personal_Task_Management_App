import React from "react";

export default function TaskSlot(props) {
  const { task, handleDeleteTask, handleEditTask } = props;

  return (
    <li className="taskItem">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="actionsContainer">
        <button onClick={() => handleEditTask(task.id)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTask(task.id)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
