import { Header } from "./components/Header";
import { PlusCircle } from "phosphor-react"
import styles from "./App.module.css"
import "./global.css"; 
import { EmptyList } from "./components/EmptyList";

export function App() {

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
            <PlusCircle size={16}/>
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


        
      </div>
    </div>
  )
}