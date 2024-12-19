import React from "react";

export default function TaskSlot(props) {
const { children } = props;
  return (
    <li className="taskItem">
        {children}
      <div className= 'actionsContainer'>
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
}
