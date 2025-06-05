import { useState } from 'react';
import TaskCounter from './componenets/TaskCounter/TaskCounter';
import AddTask from './componenets/Addtask/Addtask';
import TaskList from './componenets/Tasklist/Tasklist';
import TaskFilter from './componenets/TaskFilter';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true }
  ]);
  const [filter, setFilter] = useState('all');

  const activeTasksCount = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <TaskCounter count={activeTasksCount} />
        </div>
        
        <div className="p-6">
          <AddTask onAdd={addTask} />
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
          <TaskList 
            tasks={filteredTasks} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        </div>
      </div>
    </div>
  );
}