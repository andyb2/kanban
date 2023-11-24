import styles from "./task-creation.module.css";

export default function TaskCreation({
  tasks,
  setToggleTaskCreation,
  columnTitle,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: e.target.i1.value,
      description: e.target.i2.value,
    };
    tasks.push(newTask);

    setToggleTaskCreation(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input id='i1' />
        <label>Description</label>
        <input id='i2' />
        <button className={styles.button}>Add task</button>
      </form>
    </div>
  );
}
