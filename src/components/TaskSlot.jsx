export default function TaskSlot(props) {
    const { children, handleDeleteTask, handleEditTask, handleToggleTaskDone, taskIndex, task } = props;
  
    return (
      <li className={`taskItem ${task.done ? 'done' : ''}`}>
        {children}
        <div className="actionsContainer">
          <button onClick={() => handleToggleTaskDone(task.id)}>
            {task.done ? "Undo" : "Done"}
          </button>
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
  