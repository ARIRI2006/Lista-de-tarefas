import React, { useState } from 'react';
import './App.css';
import TodoList from './components/Header';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tirar o lixo', completed: false },
    { id: 2, title: 'Arrumar a cama', completed: true },
    { id: 3, title: 'Fazer os temas do colégio', completed: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Nova Tarefa"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
