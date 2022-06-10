import { defaultTaskState } from "../contexts/defaultTaskState";

export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return { ...state, tasks: state.tasks.concat(payload) };

    case "UPDATE_TASK":
      const updatedTasks = state.tasks.map((task) =>
        task.taskId === payload.taskId
          ? {
              ...task,
              taskTitle: payload.taskTitle,
              taskDescription: payload.taskDescription,
              taskTime: payload.taskTime,
            }
          : task
      );

      return { ...state, tasks: updatedTasks };
    case "SET_TASKS":
      return { ...state, tasks: payload };

    case "SET_TASKS":
      return defaultTaskState;
    default:
      return state;
  }
};
