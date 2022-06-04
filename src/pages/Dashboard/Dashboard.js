import { useState } from "react";
import { ToDoItem, Modal } from "../../components";
import { useTasks } from "../../contexts/TaskContext";
import Logo from "../../assets/images/clock_logo.png";
import { useTitle } from "../../utils/useTitle";
import { useTheme } from "../../contexts/ThemeContext";
import { getTheme } from "../../utils/getTheme";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { tasks } = useTasks();
  const [taskDetails, setTaskDetails] = useState();
  const { theme } = useTheme();

  useTitle("Dashboard | Subtle Clock");

  return (
    <main className={`main-container ${getTheme(theme)}`}>
      <div className="container">
        <div className="title">Welcome back, Omkar!</div>
        <div className="subtitle">{`You have ${tasks.length} tasks today. Good luck!`}</div>

        <div className={`task-container ${getTheme(theme)}`}>
          <div className="flex justify-between align-ctr">
            <div className="heading">To-do list</div>
            <button
              className="btn btn-primary btn-float h3"
              onClick={() => setShowModal(!showModal)}
            >
              +
            </button>
          </div>

          {tasks.map((task) => (
            <ToDoItem
              task={task}
              key={task.taskId}
              setTaskDetails={setTaskDetails}
              setShowModal={setShowModal}
            />
          ))}

          {showModal ? (
            <Modal
              taskDetails={taskDetails}
              setShowModal={setShowModal}
              setTaskDetails={setTaskDetails}
            />
          ) : null}
        </div>
      </div>
    </main>
  );
};
