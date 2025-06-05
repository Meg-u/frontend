import { FiTrash2 } from 'react-icons/fi';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="py-3 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          aria-label={task.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
        />
        <span
          className={`ml-3 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 transition-colors p-1"
        aria-label="Delete task"
      >
        <FiTrash2 size={18} />
      </button>
    </li>
  );
}