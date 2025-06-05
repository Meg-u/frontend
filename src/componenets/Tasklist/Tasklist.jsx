import TaskItem from './Taskitem';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {tasks.length === 0 ? (
        <li className="py-4 text-center text-gray-500">
          No tasks yet. Add one above!
        </li>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
}