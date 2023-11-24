"use client";
import styles from "./page.module.css";
import Column from "@/components/column/column";
import { apiResponse } from "@/utils/kanban-data";
import { useState } from "react";

export default function Home() {
  const [columns, setColumns] = useState(apiResponse);
  const [movingTask, setMovingTask] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Home Page</h1>
      <div className={styles.row}>
        {columns.map(({ columnTitle, color, tasks }) => {
          return (
            <Column
              key={columnTitle}
              attributes={{ columnTitle, color }}
              tasks={tasks}
              setColumns={setColumns}
              columns={columns}
              setMovingTask={setMovingTask}
              movingTask={movingTask}
            />
          );
        })}
      </div>
    </div>
  );
}
