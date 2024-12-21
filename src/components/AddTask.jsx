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
        <div className="titleDescription">
          <input
          className="title"
            type="text"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            placeholder="Task Title..."
          />
          <input
          className="description"
            type="text"
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
            placeholder="Task Description..."
          />
        </div>
  
        <button
          className="addButton"
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
  