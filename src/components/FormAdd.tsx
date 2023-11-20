import { PlusCircle } from "@phosphor-icons/react";
import styles from "./FormAdd.module.css";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IPropsListTasks } from "../App";

interface IPropsFormAdd {
  setListTasks: Dispatch<SetStateAction<IPropsListTasks[]>>;
}

export function FormAdd({ setListTasks }: IPropsFormAdd) {
  const [description, setDescription] = useState<string>("");

  function createTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Verifica se o campo description está vazio.
    if (description.length == 0) {
      alert("Informe uma descrição para a tarefa.");
    } else {
      // Inserinfo novo valor dentro do estado.
      setListTasks((oldLits: IPropsListTasks[]) => {
        return [
          ...oldLits,
          {
            id: oldLits.length + 1,
            description,
            completed: false,
          },
        ];
      });
    }

    setDescription("");
  }

  return (
    <div className={styles.formcontent}>
      <form onSubmit={createTask} className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button>
          Criar <PlusCircle size={15} />
        </button>
      </form>
    </div>
  );
}
