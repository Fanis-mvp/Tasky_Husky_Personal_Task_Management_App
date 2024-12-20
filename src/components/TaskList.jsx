import TaskSlot from "./TaskSlot";


export default function TaskList(props) {
    const { tasks, handleToggleTaskDone } = props;
  
    return (
      <ul className="main">
        {tasks.map((task) => (
          <TaskSlot
            {...props}
            key={task.id}
            task={task}
          >
            <p>{task.title}</p>
            <p>{task.description}</p>
          </TaskSlot>
        ))}
      </ul>
    );
  }
  