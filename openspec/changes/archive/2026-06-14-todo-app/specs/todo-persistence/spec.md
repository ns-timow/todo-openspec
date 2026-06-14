## ADDED Requirements

### Requirement: Persist todos across sessions
The system SHALL save the todo list to localStorage so that todos survive a page refresh.

#### Scenario: Todos survive refresh
- **WHEN** the user refreshes the page after adding todos
- **THEN** the same todos are present in the list with their completion state preserved

### Requirement: Rehydrate state on load
The system SHALL restore the full todo state (items and active filter) from localStorage on app initialization.

#### Scenario: State restored on mount
- **WHEN** the app mounts and localStorage contains a previously persisted store
- **THEN** the Zustand store is initialized with those values rather than the default empty state
