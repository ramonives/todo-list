import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

interface ITask {
  id: number;
  content: string;
  done: boolean;
}

interface ITaskProps {
  task: ITask;
  onDeleteTask: (id: number) => void;
  onToggleTaskDone: (id: number) => void;
}

export function Task({ task, onDeleteTask, onToggleTaskDone }: ITaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleTaskDone(){
    onToggleTaskDone(task.id)
  }

  return (
    <div className={task.done ? styles.containerDone : styles.container}>
      <input className={styles.input} type="checkbox" checked={task.done} onChange={handleToggleTaskDone} />
      <p className={task.done ? styles.textDone : styles.text}>
        {task.content}
      </p>
      <button className={styles.button} onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
}
