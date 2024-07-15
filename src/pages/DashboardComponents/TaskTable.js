import React from 'react';
import './TaskTable.css';
import {useNavigate} from 'react-router-dom';

const TaskTable = ({navigation}) => {

  const navigate = useNavigate();

const NavigateFun=() => {
navigate('/Task1')
}

  const tasks = [
    { id: 'Task-121', category: 'React Internship	', task: 'Build Feature X', status: 'Completed' },
    { id: 'Task-133', category: 'React Internship	', task: 'Test Feature Y', status: 'Pending' },
    { id: 'Task-143', category: 'React Internship	', task: 'Create UI Mockups', status: 'Completed' },
    { id: 'Task-221', category: 'React Internship	', task: 'Test Feature Y', status: 'Pending' },
    { id: 'Task-141', category: 'React Internship	', task: 'Create UI Mockups', status: 'Completed' },
  ];

  return (
    <div className="task-table-container">
      <h2>Your Running Tasks</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task ID</th>
            <th>Category</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.id}</td>
              <td>{task.category}</td>
              <td>{task.task}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={NavigateFun}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
