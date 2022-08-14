import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react";
import { EmptyList } from "./components/EmptyList";
import { Task } from "./components/Task";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      content: "Primeira task",
      done: false,
    },
    {
      id: Math.random(),
      content: "Segunda task",
      done: true,
    },
  ]);
  const [task, setTask] = useState("");

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      content: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function toggleTaskDone(id: number) {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );

    setTasks(updatedTask);
  }

  const existList = tasks.length === 0;
  const isNewTask = task.length === 0;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask} className={styles.containerRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={handleNewTask}
            required
          />
          <button className={styles.button} type="submit" disabled={isNewTask}>
            Criar
            <PlusCircle size={24} />
          </button>
        </form>

        <div className={styles.countTasks}>
          <div className={styles.containerRow}>
            <p className={styles.createdTasks}>
              Tarefas criadas
              <p className={styles.amount}>0</p>
            </p>
            <p className={styles.completedTasks}>
              Concluidas
              <p className={styles.amount}>0</p>
            </p>
          </div>
        </div>

        {existList ? (
          <EmptyList />
        ) : (
          tasks.map((task) => (
            <Task
              task={task}
              onDeleteTask={deleteTask}
              onToggleTaskDone={toggleTaskDone}
            />
          ))
        )}
      </div>
    </div>
  );
}
