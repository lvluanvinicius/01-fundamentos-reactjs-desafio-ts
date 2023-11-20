import { Clipboard } from "@phosphor-icons/react";
import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.listEmpty}>
      <Clipboard size={68} />
      <div className={styles.emptyMessage}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
