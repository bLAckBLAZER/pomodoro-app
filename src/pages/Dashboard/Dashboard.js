import { useState } from "react";
import { NavBar, Footer, ToDoItem, Modal } from "../../components";
import { useTasks } from "../../contexts/TaskContext";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const { tasks } = useTasks();
  const [taskDetails, setTaskDetails] = useState();
  return (
    <div className="flex flex-col justify-between">
      <NavBar title="Subtle Clock" />
      <main className="main-container">
        <div className="container">
          <div className="title">Welcome back, Omkar!</div>
          <div className="subtitle">{`You have ${tasks.length} tasks today. Good luck!`}</div>

          <div className="task-container">
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
      <Footer />
    </div>
  );
};
