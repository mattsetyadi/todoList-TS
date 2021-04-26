import { ITask } from './TodoContainer';
import React from 'react';

// Cara passing props
// Props interface hasrus de tentukan
// dan disini diambil juga tipe dari interfce ITask 😅
interface IProps {
  task: ITask;
  //   cara memanggil props fungsi di TS, definisikan menjadi function di interface
  // masukan argumen yg dibutuhkan, dan pada penggunaannya tidak bisa langsung dipanggil
  // karena argumen yg digunakan ada 2 yaitu taskNameToDelete dan bertipe string dan taskName
  completeTask(taskNameToDelete: string): void;
}

const Todotask = ({ task, completeTask }: IProps) => {
  const { taskName, deadline } = task;
  return (
    <div className="task">
      <div className="content">
        <span>{taskName}</span>
        <span>{deadline} days</span>
      </div>
      <button
        onClick={() => {
          completeTask(taskName);
        }}
      >
        🆇
      </button>
    </div>
  );
};

export default Todotask;
