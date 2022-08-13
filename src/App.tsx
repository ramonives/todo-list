import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react"
import { EmptyList } from "./components/EmptyList";

import styles from "./App.module.css"
import "./global.css";
import { Task } from "./components/Task";

export function App() {

  const arr = [1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4,1, 2, 3, 4]


  const existList = arr.length === 0

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerRow}>
          <input
            className={styles.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button
            className={styles.button}
            type="submit"
          >
            Criar
            <PlusCircle size={24} />
          </button>
        </div>

        <div className={styles.countTasks}>
          <div className={styles.containerRow}>
            <p className={styles.createdTasks}>Tarefas criadas
              <p className={styles.amount}>0</p>
            </p>
            <p className={styles.completedTasks}>Concluidas
              <p className={styles.amount}>0</p>
            </p>
          </div>
        </div>

        {
          existList ? (
            <EmptyList />
          ) : (
            arr.map(task => <Task />)
          )
        }

      </div>
    </div>
  )
}