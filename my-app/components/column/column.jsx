import styles from "./column.module.css";

export default function Column({ attributes, tasks, setColumns }) {
  const { columnTitle, color } = attributes;

  const handleOnDrag = (e, removeTask) => {
    const tasksCopy = [...tasks];

    const filteredTasks = tasksCopy.filter((task) => task.id !== removeTask.id);

    setColumns((prevState) => {
      const stateCopy = [...prevState];

      const mappedState = stateCopy.map((column) => {
        if (column.columnTitle === columnTitle) {
          column.tasks = filteredTasks;
          console.log(column.tasks);
        }
        return column;
      });

      return mappedState;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {};

  return (
    <div
      className={styles.container}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleOnDrop(e, columnTitle)}
    >
      <h5 className={styles.header} style={{ background: color }}>
        {columnTitle}
      </h5>
      <div className={styles.spacer}>
        {tasks.map((task) => {
          return (
            <div
              className={styles.card}
              key={task.id}
              draggable={true}
              onDragStart={(e) => handleOnDrag(e, task)}
            >
              <div className={styles.title}>{task.title}</div>
              <p className={styles.description}>{task.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
