'use client'
import styles from './page.module.css';
import Column from "@/components/column/column";
import { board, list } from '@/utils/kanban-data';
import { useState } from 'react';

export default function Home() {
  const [listData, setListData] = useState(list);
  const [draggedCard, setDraggedCard] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Home Page</h1>
      <div className={styles.row}>
        {
          board.map((item) => {
            return (
              <Column board={item} list={list[item.title]} setListData={setListData} setDraggedCard={setDraggedCard} />
            )
          })
        }
      </div>
    </div>
  )
}
