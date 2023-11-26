'use client';
import DeleteTask from '../delete-task/delete-task';
import TaskCreation from '../task-creation/task-creation';
import styles from './column.module.css';
import { addOrRemoveTaskFromCol } from '@/utils/function';
import { useState } from 'react';

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

  const handleOnDrag = (task) => {
    setMovingTask({ prevColumnTitle: columnTitle, task });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    const addToCol = columnTitle;
    const newState = addOrRemoveTaskFromCol(
      columns,
      movingTask.task.id,
      movingTask.prevColumnTitle,
      addToCol,
      movingTask
    );

    setColumns(newState);
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
              onDragStart={() => handleOnDrag(task)}
            >
              <DeleteTask
                columns={columns}
                taskId={task.id}
                columnTitle={columnTitle}
                setColumns={setColumns}
              />
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
