import clipboard from "../assets/clipboard.svg"
import styles from "./EmptyList.module.css"

export function EmptyList() {
    return (
        <div className={styles.container}>
            <img src={clipboard} />
            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.regular}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}