import React from 'react';
import './header.css';

function TodoList({ tasks, toggleTaskCompletion }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
