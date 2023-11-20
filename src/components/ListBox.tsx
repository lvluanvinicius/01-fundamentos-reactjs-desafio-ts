import styles from "./ListBox.module.css";
import { EmptyList } from "./EmptyList";
import { CardList } from "./CardList";
import { IPropsListTasks } from "../App";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IPropsListBox {
  lists: IPropsListTasks[];
  setListTasks: Dispatch<SetStateAction<IPropsListTasks[]>>;
}

export function ListBox({ lists, setListTasks }: IPropsListBox) {
  function removeTask(id: number) {
    const newTasks = lists.filter((task) => task.id === id);

    setListTasks(newTasks);
  }

  function changeComplete(checked: boolean, value: number) {
    const newTasks = lists.map((task) => {
      if (task.id == value) {
        task.completed = true
      };
      return task;
    });

    setListTasks(newTasks);
  }

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.createdTask}>
            Tarefas criadas <span>{lists.length}</span>
          </div>
          <div className={styles.completedtasks}>
            Concluídas <span>0 de {lists.length}</span>
          </div>
        </header>
        <main className={styles.maincontent}>
          {lists.length == 0 ? (
            <EmptyList />
          ) : (
            lists.map((task) => (
              <CardList
                key={task.id}
                isCompleted={task.completed}
                description={task.description}
                idTask={task.id}
                removeTask={removeTask}
                setCompleted={changeComplete}
              />
            ))
          )}
        </main>
      </div>
    </div>
  );
}
