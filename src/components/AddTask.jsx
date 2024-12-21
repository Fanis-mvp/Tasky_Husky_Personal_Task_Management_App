export default function AddTask(props) {
    const {
      handleAddTask,
      taskTitle,
      setTaskTitle,
      taskDescription,
      setTaskDescription,
      filterValue,
      setFilterValue,
    } = props;
  
    return (
      <header>
        <div className="titleDescription">
          <input
          className="title"
            type="text"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            placeholder="Add Task Title..."
          />
          <input
          className="description"
            type="text"
            value={taskDescription}
            onChange={(event) => setTaskDescription(event.target.value)}
            placeholder="Add Task Description..."
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
  