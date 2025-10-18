import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [input, setInput] = useState(''); 

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return; 

    const newTask = {
      id: Date.now(), 
      text: input
    };

    setTasks([...tasks, newTask]); 
    setInput(''); 
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id)); 
  };

  return (
    <div>
      <h2>To-Do List</h2>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet.</p>
      )}
    </div>
  );
}

export default App;
