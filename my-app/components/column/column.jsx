import styles from './column.module.css';

export default function Column({ title, list }) {


    return (
        <div className={styles.container}>
            <h5 className={styles.header}>{title}</h5>
            {
                list.map(task => {
                    return (
                        <div>
                            <div>{task.title}</div>
                            <p>{task.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}