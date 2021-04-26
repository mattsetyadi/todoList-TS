import React, { ChangeEvent, FC, useState } from 'react';

import Todotask from './Todotask';

// jika ingin memasukan kumpulan state menjadi objek ke array harus dibuat interface nya
// ini untuk memasukan objek task dan deadline ke todoList di setTodoList
export interface ITask {
  taskName: string;
  deadline: number;
}

const TodoContainer: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addtask = (): void => {
    // task bukan array jf dibuat inerface untuk mendefinisikannya di useState
    // kemudian dibuat object agar yg masuk task dan deadline pada array tsb
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    // console.log(todoList);
    setTask('');
    setDeadline(0);
  };

  //   fungsi untuk di passing ke props di komponen
  // argumennya yg menerima, lalu buat variabel dalam fungsi yang diambil
  // dari taskName di button, lengkapnya dilihat di komponen
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header-todo">
        <div className="input-container">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Text"
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            placeholder="Deadline in days"
            onChange={handleChange}
          />
        </div>
        <button onClick={addtask}>Add task</button>
      </div>
      <div className="todo-list">
        {todoList &&
          todoList.map((task: ITask, key: number) => {
            return (
              <Todotask key={key} task={task} completeTask={completeTask} />
            );
          })}
      </div>
    </div>
  );
};

export default TodoContainer;
