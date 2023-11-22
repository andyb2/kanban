'use client';
import styles from './column.module.css';
import { useState, useRef } from 'react';

export default function Column({ board, list, setListData, setDraggedCard }) {
    const cardRef = useRef(null);
    const columnRef = useRef(null)
    let dragged = false;

    const handleOnDrag = (event, card, idx, title) => {
        const { target } = event;
        // Waits when the dragging of a card has started then triggers the display none
        // so it still shows the dragging effect
        setTimeout(() => {
            target.style.display = "none";
        }, 0)    
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleOnDrop = (e) => {
        e.preventDefault();
        console.log(draggedCard)
    }

    return (
        <div className={styles.container} onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleOnDrop(e)} data-board={board.title} ref={columnRef}>
            <h5 className={styles.header} style={{background: board.color}}>{board.title}</h5>
            <div className={styles.spacer}>
            {
                list.map((task, idx) => {
                    return (
                        <div className={styles.card} draggable={true} onDragStart={(e) => handleOnDrag(e, task, idx, board.title)}>
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