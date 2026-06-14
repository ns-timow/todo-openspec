import { useState, KeyboardEvent } from 'react'
import { useTodoStore } from '../store/todoStore'

export function TodoInput() {
  const [text, setText] = useState('')
  const { addTodo, toggleAll, todos } = useTodoStore()

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <div className="flex items-center border-b border-gray-200 px-4 py-3">
      <button
        onClick={toggleAll}
        className="mr-3 text-gray-400 hover:text-gray-600 text-xl leading-none"
        aria-label="Toggle all"
        disabled={todos.length === 0}
      >
        ❯
      </button>
      <input
        className="flex-1 text-xl text-gray-400 placeholder-gray-400 outline-none italic"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        autoFocus
      />
    </div>
  )
}
