import styles from './page.module.css';
import Column from "@/components/column/column";
import { board, list } from '@/utils/kanban-data';

export default function Home() {

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Home Page</h1>
      <div className={styles.row}>
        {
          board.map((item) => {
            return (
              <Column board={item} list={list[item.title]} />
            )
          })
        }
      </div>
    </div>
  )
}
