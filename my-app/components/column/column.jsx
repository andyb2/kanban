import styles from './column.module.css';
import { useRef } from 'react';

export default function Column({ board, list }) {
    const cardRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleOnDrop = (e) => {
        e.preventDefault();
        console.log(cardRef)
    }
    
    return (
        <div className={styles.container} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleOnDrop(e)}>
            <h5 className={styles.header} style={{background: board.color}}>{board.title}</h5>
            <div className={styles.spacer}>
            {
                list.map(task => {
                    return (
                        <div className={styles.card} draggable ref={() => cardRef.current = {title: task.title, description: task.description}}>
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