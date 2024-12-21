export default function TaskSlot(props) {
    const { children, handleDeleteTask, handleEditTask, handleToggleTaskDone, taskIndex, task } = props;
  
    return (
      <li className={`taskItem ${task.done ? 'done' : ''}`}>
        <div className="titleAndDescription">
        {children}
        </div>
        <div className="actionsContainer">
          <button className="doneButton" onClick={() => handleToggleTaskDone(task.id)}>
            {task.done ? "☑" : "☐"}
          </button>
          <button className="editButton" onClick={() => handleEditTask(task.id)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="deleteButton" onClick={() => handleDeleteTask(task.id)}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>

      </li>
    );
  }
  