import { Trash } from "@phosphor-icons/react";
import styles from "./CardList.module.css";
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { IPropsListTasks } from "../App";

interface IPropsCardList {
  idTask: number;
  description: string;
  isCompleted: boolean;
  removeTask: (id: number) => void;
  setCompleted: (checked: boolean, value: number) => void;
}

export function CardList({
  idTask,
  description,
  removeTask,
  isCompleted,
  setCompleted,
}: IPropsCardList) {
  const [isCompletedTask, setIsCompletedTask] = useState<boolean>(isCompleted);


  function onChangeTask(event: FormEvent<HTMLInputElement>) {
    const { checked, value } = event.currentTarget;

    setCompleted(checked, parseInt(value))
  }

  useEffect(() => {
    setIsCompletedTask(isCompleted);
  }, [isCompleted])

  return (
    <div className={styles.taskcard}>
      <div className={styles.check}>
        <input
          type="checkbox"
          id={`task${idTask}`}
          onChange={onChangeTask}
          checked={isCompletedTask}
          value={idTask}
        />r
      </div>
      <div
        className={
          isCompletedTask ? styles.descriptionCompleted : styles.description
        }
      >
        {description}
      </div>
      <div className={styles.action}>
        <button onClick={() => removeTask(idTask)}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
