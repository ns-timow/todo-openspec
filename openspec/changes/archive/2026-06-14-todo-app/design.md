## Context

A greenfield todo app built as an OpenSpec demo artifact. The codebase starts empty (Vite + React scaffold). The design should stay minimal — the audience is watching the OpenSpec process, not evaluating the app architecture.

## Goals / Non-Goals

**Goals:**
- Single-page client-side app with no backend
- Zustand store as the single source of truth for todo state
- localStorage persistence via Zustand middleware
- Match the TodoMVC visual style from the design reference (rose heading, white card, circle checkboxes, filter footer)
- Tailwind for all styling — no CSS files, no component libraries

**Non-Goals:**
- User authentication or multi-user support
- Server-side persistence or API
- Routing (single view, filter state in memory)
- Accessibility beyond basic semantic HTML
- Testing

## Decisions

**Zustand with `persist` middleware for state**
Zustand's `persist` middleware serializes the store to localStorage automatically. Alternative: `useReducer` + manual `useEffect` for persistence. Zustand is already in the stack and keeps the store/component boundary clean.

**Three focused components: `TodoInput`, `TodoItem`, `TodoFooter`**
Each maps directly to a visual section of the UI. Alternative: one monolithic component. Splitting keeps each component's responsibility obvious, which aids the demo narrative.

**Filter state lives in the Zustand store**
Keeps all app state in one place, making the store the single thing to inspect during a demo. Alternative: local `useState` in `App`. The store approach better illustrates Zustand's role.

**Tailwind utility classes, no custom CSS**
The reference design uses simple colors and spacing that map cleanly to Tailwind. Alternative: CSS Modules. Tailwind keeps everything co-located with JSX, reducing file count.

## Risks / Trade-offs

`persist` middleware serializes on every store mutation → negligible for a demo app with < 100 todos.

Tailwind class verbosity on `TodoItem` (checked/unchecked states) → acceptable; the demo doesn't focus on styling code.
