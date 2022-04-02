import { v4 as uuid } from "uuid";

export const validateTask = (newTask, setError) => {
  const { taskTitle, taskDescription } = newTask;

  if (taskTitle.length === 0) {
    setError("Title cannot be blank!");
    return false;
  }

  if (taskDescription.length === 0) {
    setError("Description cannot be blank!");
    return false;
  }

  return true;
};

export const addTask = (newTask, setTasks, tasks, setError, resetModal) => {
  if (!validateTask(newTask, setError)) {
    return;
  }

  setTasks([
    ...tasks,
    {
      ...newTask,
      taskId: uuid(),
    },
  ]);
  resetModal();
};

export const updateTask = ({
  taskId,
  newTask,
  setTasks,
  tasks,
  setError,
  resetModal,
}) => {
  if (!validateTask(newTask, setError)) {
    return;
  }

  const updatedList = tasks.map((task) =>
    task.taskId === taskId
      ? {
          ...task,
          taskTitle: newTask.taskTitle,
          taskDescription: newTask.taskDescription,
          taskTime: newTask.taskTime,
        }
      : task
  );

  setTasks(updatedList);
  resetModal();
};

export const deleteTask = (tasks, setTasks, taskId) => {
  const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
  setTasks(updatedTasks);
};
