import styles from "./task-creation.module.css";

export default function TaskCreation({ tasks, setToggleTaskCreation }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    tasks.push(newTask);

    setToggleTaskCreation(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input id='title' />
        <label>Description</label>
        <input id='description' />
        <button className={styles.button}>Add task</button>
      </form>
    </div>
  );
}
