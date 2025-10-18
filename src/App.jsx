import React, { useState } from 'react';
import './app.css'
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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">To-Do List</h2>

      <form onSubmit={handleAddTask} className="flex mb-6">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
        >
          Add
        </button>
      </form>

      {tasks.length > 0 ? (
        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-md shadow-sm"
            >
              <span>{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No tasks added yet.</p>
      )}
    </div>
  );
}

export default App;
