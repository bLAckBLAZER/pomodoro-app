import { useState } from "react";
import { NavBar, Footer, ToDoItem, Modal } from "../../components";

export const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col justify-between">
      <NavBar title="Subtle Clock" />
      <main className="main-container">
        <div className="container">
          <div className="title">Welcome back, Omkar!</div>
          <div className="subtitle">You have 4 tasks today. Good luck!</div>

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

            <ToDoItem taskName="Math Homework" isCompleted={true} />
            <ToDoItem taskName="Science Homework" isCompleted={false} />
            <Modal showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
