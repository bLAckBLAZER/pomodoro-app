import { useState } from "react";
import "./Modal.css";

export const Modal = ({
  title,
  description,
  time,
  showModal,
  setShowModal,
}) => {
  const [taskTitle, setTaskTitle] = useState(title || "");
  const [taskDescription, setTaskDescription] = useState(description || "");
  const [taskTime, setTaskTime] = useState(15);

  return (
    <div className={`modal-container ${showModal ? "" : "hidden"}`}>
      <div className="modal">
        <i
          class="fas fa-times"
          id="close-modal"
          onClick={() => setShowModal(false)}
        ></i>

        <input
          type="text"
          id="task-title"
          className="modal-input"
          placeholder="Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          type="text"
          id="task-desc"
          className="modal-input"
          placeholder="Description..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input
          type="number"
          id="task-time"
          className="modal-input"
          placeholder="Time in minutes"
          min={0}
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            className="btn btn-secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(false)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
