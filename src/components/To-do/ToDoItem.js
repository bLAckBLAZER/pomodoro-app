export const ToDoItem = ({ taskName, isCompleted }) => {
  return (
    <div
      className={`flex justify-between align-ctr px-1 py-1 ${
        isCompleted ? "task-complete " : ""
      }`}
    >
      <p className={`h4  ${isCompleted ? "txt-strike " : ""}`}>{taskName}</p>
      <div className="flex gap-1 align-ctr">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  );
};
