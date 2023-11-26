import styles from './delete-task.module.css';
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
  return (
    <button className={styles.button} onClick={handleOnClick}>
      X
    </button>
  );
}
