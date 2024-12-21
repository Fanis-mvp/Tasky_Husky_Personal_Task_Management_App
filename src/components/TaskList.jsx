import TaskSlot from "./TaskSlot";


export default function TaskList(props) {
    const { tasks, handleToggleTaskDone } = props;
  
    return (
      <ul className="taskList">
        {tasks.map((task) => (
          <TaskSlot
            {...props}
            key={task.id}
            task={task}
          >
            <p className="itemTitle">{task.title}</p>
            <p className="itemDescription">{task.description}</p>
          </TaskSlot>
        ))}
      </ul>
    );
  }
  