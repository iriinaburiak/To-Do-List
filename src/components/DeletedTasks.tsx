import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Task } from '../redux/types';
import '../styles/Tasks.scss';

const DeletedTasks: React.FC = () => {
  const deletedTasks: Task[] = useSelector((state: RootState) => state.deletedTasks);

  return (
    <div className="tasks-container">
      <h1>Deleted Tasks</h1>
      <ul>
        {deletedTasks.map((task: Task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default DeletedTasks;
