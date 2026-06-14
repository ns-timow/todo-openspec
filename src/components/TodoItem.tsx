import { Todo } from '../store/todoStore'
import { useTodoStore } from '../store/todoStore'

interface Props {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  const toggleTodo = useTodoStore((s) => s.toggleTodo)

  return (
    <div
      className={`flex items-center px-4 py-4 border-b border-gray-200 ${
        todo.completed ? 'border-rose-300 bg-white' : ''
      }`}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className="mr-4 w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors"
        style={
          todo.completed
            ? { borderColor: '#5ba4a4', color: '#5ba4a4' }
            : { borderColor: '#d1d5db' }
        }
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>
      <span
        className={`text-xl ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>
    </div>
  )
}
