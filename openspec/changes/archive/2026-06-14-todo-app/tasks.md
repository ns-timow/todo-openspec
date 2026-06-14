## 1. Project Setup

- [x] 1.1 Scaffold project with `npm create vite@latest` (React + TypeScript template)
- [x] 1.2 Install dependencies: `zustand`, `tailwindcss`, `@tailwindcss/vite`
- [x] 1.3 Configure Tailwind in `vite.config.ts` and add `@import "tailwindcss"` to `src/index.css`
- [x] 1.4 Clear Vite boilerplate from `App.tsx` and `index.css`

## 2. Zustand Store

- [x] 2.1 Create `src/store/todoStore.ts` with `Todo` type (`id`, `text`, `completed`)
- [x] 2.2 Add store actions: `addTodo`, `toggleTodo`, `toggleAll`, `clearCompleted`
- [x] 2.3 Add `filter` state (`'all' | 'active' | 'completed'`) and `setFilter` action
- [x] 2.4 Wrap store with `persist` middleware targeting `localStorage`

## 3. Components

- [x] 3.1 Create `src/components/TodoInput.tsx` — text input with toggle-all chevron, calls `addTodo` on Enter
- [x] 3.2 Create `src/components/TodoItem.tsx` — row with circle checkbox, todo text, handles `toggleTodo`
- [x] 3.3 Create `src/components/TodoFooter.tsx` — item count, filter tabs (All/Active/Completed), Clear completed button

## 4. App Shell & Styling

- [x] 4.1 Compose `App.tsx`: rose "todos" heading, white card containing `TodoInput`, filtered `TodoItem` list, `TodoFooter`
- [x] 4.2 Style heading: large serif-style font, rose/muted-red color (`text-rose-800`)
- [x] 4.3 Style card: white background, subtle box shadow, stacked rows with dividers
- [x] 4.4 Style `TodoItem`: empty circle for incomplete, green checkmark circle for complete, line-through text when complete, rose border on selected/hovered row
- [x] 4.5 Style `TodoFooter`: muted text for count, rose outlined pill for active filter tab
- [x] 4.6 Set page background to light gray (`bg-gray-100`)

## 5. Verification

- [x] 5.1 Add a todo, refresh page — todo persists
- [x] 5.2 Toggle a todo complete — checkbox fills green, text gets line-through
- [x] 5.3 Switch filters — Active hides completed, Completed hides active
- [x] 5.4 Clear completed — only incomplete todos remain
- [x] 5.5 Toggle all — all items flip to complete/incomplete
