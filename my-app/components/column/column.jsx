"use client";
import TaskCreation from "../task-creation/task-creation";
import styles from "./column.module.css";
import { useState } from "react";

export default function Column({
  attributes,
  tasks,
  setColumns,
  columns,
  setMovingTask,
  movingTask,
}) {
  const [toggleTaskCreation, setToggleTaskCreation] = useState(false);
  const { columnTitle, color } = attributes;

  const handleOnDrag = (e, task) => {
    setMovingTask({ prevColumnTitle: columnTitle, task });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    e.preventDefault();

    const mappedState = columns.map((column) => {
      if (column.columnTitle === movingTask.prevColumnTitle) {
        const filteredTasks = column.tasks.filter(
          (task) => task.id !== movingTask.task.id
        );
        column.tasks = filteredTasks;
      }

      if (column.columnTitle === columnTitle) {
        column.tasks.push(movingTask.task);
      }

      return column;
    });
    setColumns(mappedState);
  };

  const handleClick = () => {
    setToggleTaskCreation((prev) => !prev);
  };

  return (
    <div
      className={styles.container}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleOnDrop(e, columnTitle)}
    >
      <h5 className={styles.header} style={{ background: color }}>
        {columnTitle}
      </h5>
      <div className={tasks.length && styles.tasks}>
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
      <div className={styles.buttonContainer} onClick={handleClick}>
        <button className={styles.button}>+</button>
        <p className={styles.p}>Add a task</p>
      </div>
      {toggleTaskCreation && (
        <TaskCreation
          tasks={tasks}
          setToggleTaskCreation={setToggleTaskCreation}
        />
      )}
    </div>
  );
}
