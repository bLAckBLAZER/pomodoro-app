import { useTasks } from "../../contexts/TaskContext";
import { deleteTask } from "../../utils/taskActions";
import { Link } from "react-router-dom";
import "./ToDoItem.css";

export const ToDoItem = ({ task, setTaskDetails, setShowModal }) => {
  const { tasks, setTasks } = useTasks();

  const { taskId, taskTitle, isCompleted } = task;

  const onEditClick = (task, setTaskDetails, setShowModal) => {
    setTaskDetails(task);
    setShowModal(true);
  };

  return (
    <div
      className={`todo-item flex justify-between align-ctr px-1 py-1 ${
        isCompleted ? "task-complete " : ""
      }`}
    >
      <Link to="/pomodoro" state={{ task }}>
        <p className={`h4  ${isCompleted ? "txt-strike " : ""}`}>{taskTitle}</p>
      </Link>
      <div className="flex gap-1 align-ctr">
        <i
          className="fas fa-edit"
          onClick={() => onEditClick(task, setTaskDetails, setShowModal)}
        ></i>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteTask(tasks, setTasks, taskId)}
        ></i>
      </div>
    </div>
  );
};
