export const addOrRemoveTaskFromCol = (
  columns,
  id,
  colToRemoveFromTitle,
  addToCol,
  movingTask
) => {
  return columns.map((column) => {
    if (column.columnTitle === colToRemoveFromTitle) {
      column.tasks = column.tasks.filter((task) => task.id !== id);
    }

    if (column.columnTitle === addToCol) {
      column.tasks.push(movingTask.task);
    }
    return column;
  });
};
