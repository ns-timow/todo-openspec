## Why

A working todo application is needed as a concrete example for OpenSpec demos and talks. Using a familiar TodoMVC-style UI keeps the audience focused on the OpenSpec workflow rather than the problem domain — the app itself is the artifact, not the goal.

## What Changes

- Add a todo application UI with a rose-colored "todos" heading
- Add an input field for creating new todos with a toggle-all chevron
- Add todo list with circle checkbox toggles, strikethrough for completed items
- Add footer with active item count, All/Active/Completed filter tabs, and "Clear completed" action
- Add Zustand store for todo state management
- Add localStorage persistence so todos survive page refresh

## Capabilities

### New Capabilities

- `todo-list`: Core todo management — add, toggle complete, display todos with visual completed state (strikethrough, green checkmark circle)
- `todo-filters`: Filter view (All / Active / Completed), active item count display, and bulk "Clear completed" action
- `todo-persistence`: Persist todo state to localStorage and rehydrate on load

### Modified Capabilities

## Impact

- New app entry point: `src/App.tsx`, `src/main.tsx`
- New Zustand store: `src/store/todoStore.ts`
- New components under `src/components/`
- Tailwind CSS for styling (no external component library)
- No backend — fully client-side
