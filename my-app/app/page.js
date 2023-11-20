import styles from './page.module.css';
import Column from "@/components/column/column";

export default function Home() {
  const board = ['Backlog', 'Doing', 'Review', 'Done'];

  const list = {
    'Backlog': [
      {
        title: 'test1',
        description: 'some random task to do'
      },
      {
        title: 'test2',
        description: 'some random task to do'
      },
      {
        title: 'test3',
        description: 'some random task to do'
      }
    ],
    'Doing': [
      {
        title: 'test4',
        description: 'some random task to do'
      },
      {
        title: 'test5',
        description: 'some random task to do'
      },
      {
        title: 'test6',
        description: 'some random task to do'
      }
    ],
    'Review': [
      {
        title: 'test1',
        description: 'some random task to do'
      },
      {
        title: 'test2',
        description: 'some random task to do'
      },
      {
        title: 'test3',
        description: 'some random task to do'
      }
    ],
    'Done': [
      {
        title: 'test1',
        description: 'some random task to do'
      },
      {
        title: 'test2',
        description: 'some random task to do'
      },
      {
        title: 'test3',
        description: 'some random task to do'
      }
    ]
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Home Page</h1>
      <div className={styles.row}>
        {
          board.map((title) => {
            return (
              <Column title={title} list={list[title]} />
            )
          })
        }
      </div>
    </div>
  )
}
