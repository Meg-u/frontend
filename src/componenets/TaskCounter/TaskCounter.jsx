export default function TaskCounter({ count }) {
  return (
    <p className="mt-1 text-gray">
      {count} {count === 1 ? 'task' : 'tasks'} remaining
    </p>
  );
}