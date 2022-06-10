import { createContext, useContext, useState, useReducer } from "react";
import { taskReducer } from "../reducers";
import { defaultTaskState } from "./defaultTaskState";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [taskState, dispatchTask] = useReducer(taskReducer, defaultTaskState);

  return (
    <TaskContext.Provider value={{ taskState, dispatchTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => useContext(TaskContext);

export { TaskProvider, useTasks };
