import { Filter, useTodoStore } from '../store/todoStore'

const FILTERS: Filter[] = ['all', 'active', 'completed']

export function TodoFooter() {
  const { todos, filter, setFilter, clearCompleted } = useTodoStore()
  const activeCount = todos.filter((t) => !t.completed).length
  const hasCompleted = todos.some((t) => t.completed)

  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-500">
      <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left!</span>
      <div className="flex gap-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded capitalize transition-colors ${
              filter === f
                ? 'border border-rose-400 text-rose-700'
                : 'hover:border hover:border-gray-300'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      {hasCompleted && (
        <button
          onClick={clearCompleted}
          className="hover:text-gray-700 transition-colors"
        >
          Clear completed
        </button>
      )}
    </div>
  )
}
