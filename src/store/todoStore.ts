import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Filter = 'all' | 'active' | 'completed'

export interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoStore {
  todos: Todo[]
  filter: Filter
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  toggleAll: () => void
  clearCompleted: () => void
  setFilter: (filter: Filter) => void
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: 'all',
      addTodo: (text) =>
        set((s) => ({
          todos: [...s.todos, { id: crypto.randomUUID(), text, completed: false }],
        })),
      toggleTodo: (id) =>
        set((s) => ({
          todos: s.todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
        })),
      toggleAll: () => {
        const allDone = get().todos.every((t) => t.completed)
        set((s) => ({ todos: s.todos.map((t) => ({ ...t, completed: !allDone })) }))
      },
      clearCompleted: () =>
        set((s) => ({ todos: s.todos.filter((t) => !t.completed) })),
      setFilter: (filter) => set({ filter }),
    }),
    { name: 'todo-storage' }
  )
)
