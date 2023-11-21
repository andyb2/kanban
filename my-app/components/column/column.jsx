import styles from './column.module.css';

export default function Column({ board, list }) {

    return (
        <div className={styles.container}>
            <h5 className={styles.header} style={{background: board.color}}>{board.title}</h5>
            <div className={styles.spacer}>
            {
                list.map(task => {
                    return (
                        <div className={styles.card} draggable>
                            <div className={styles.title}>{task.title}</div>
                            <p className={styles.description}>{task.description}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}