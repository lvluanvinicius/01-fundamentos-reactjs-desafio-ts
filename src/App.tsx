import { useState } from "react";
import { FormAdd } from "./components/FormAdd";
import { Header } from "./components/Header";
import { ListBox } from "./components/ListBox";
import "./global.module.css";

export interface IPropsListTasks {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [listTasks, setListTasks] = useState<IPropsListTasks[]>([
    {
      id: 1,
      description:
        "Labore cillum mollit mollit aliquip reprehenderit fugiat qui pariatur esse tempor Lorem.",
      completed: false,
    },
    {
      id: 2,
      description:
        "Labore cillum mollit mollit aliquip reprehenderit fugiat qui pariatur esse tempor Lorem.",
      completed: true,
    },
    {
      id: 3,
      description:
        "Labore cillum mollit mollit aliquip reprehenderit fugiat qui pariatur esse tempor Lorem.",
      completed: false,
    },
  ]);

  return (
    <>
      <Header />
      <FormAdd setListTasks={setListTasks} />
      <ListBox
        lists={listTasks.sort((a, b) => {
          return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
        })}
        setListTasks={setListTasks}
      />
    </>
  );
}

export default App;
