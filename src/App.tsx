import { useTodoStore } from './store/todoStore'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'
import { TodoFooter } from './components/TodoFooter'

function App() {
  const { todos, filter } = useTodoStore()

  const visibleTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-16 px-4">
      <h1
        className="text-8xl font-light mb-10 text-rose-800/60"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        todos
      </h1>
      <div className="w-full max-w-xl shadow-[0_2px_20px_rgba(0,0,0,0.12)]">
        <div className="bg-white">
          <TodoInput />
          {visibleTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
        {todos.length > 0 && (
          <div className="bg-white border-t border-gray-200">
            <TodoFooter />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
