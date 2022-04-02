import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("userTasks")) || []
  );

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => useContext(TaskContext);

export { TaskProvider, useTasks };
