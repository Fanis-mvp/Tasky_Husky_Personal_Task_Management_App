import React from "react";

export default function TaskSlot(props) {
  const { children, handleDeleteTask, taskIndex, handleEditTask } = props;
  return (
    <li className="taskItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => {
            handleEditTask(taskIndex)
        }} >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
            handleDeleteTask(taskIndex)
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
