import { addOrRemoveTaskFromCol } from '@/utils/function';

export default function DeleteTask({
  columns,
  taskId,
  columnTitle,
  setColumns,
}) {
  const handleOnClick = () => {
    const newColumn = addOrRemoveTaskFromCol(columns, taskId, columnTitle);
    setColumns(newColumn);
  };
  return <button onClick={handleOnClick}>X</button>;
}
