import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../styles/Tasks.scss';

const AllTasks: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div className="tasks-container">
      <h1>All Tasks</h1>
      <ul>
        {tasks.map((task: any) => ( // Явно вказуємо тип для параметра task
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <Link to="/deleted">View Deleted Tasks</Link>
    </div>
  );
};

export default AllTasks;
