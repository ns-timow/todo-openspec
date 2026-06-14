## ADDED Requirements

### Requirement: Filter todos by status
The system SHALL provide three filter tabs — All, Active, Completed — that control which todos are visible in the list.

#### Scenario: All filter shows every todo
- **WHEN** the "All" filter is active
- **THEN** every todo in the store is rendered in the list

#### Scenario: Active filter shows only incomplete todos
- **WHEN** the "Active" filter is active
- **THEN** only todos with complete = false are rendered

#### Scenario: Completed filter shows only complete todos
- **WHEN** the "Completed" filter is active
- **THEN** only todos with complete = true are rendered

### Requirement: Highlight active filter
The system SHALL visually indicate the currently selected filter tab.

#### Scenario: Selected tab is outlined
- **WHEN** a filter tab is the active selection
- **THEN** the tab renders with a rose-colored border outline

### Requirement: Display active item count
The system SHALL show a count of incomplete todos in the footer.

#### Scenario: Count reflects incomplete todos
- **WHEN** the todo list is rendered
- **THEN** the footer displays "<N> item left!" where N is the number of incomplete todos

### Requirement: Clear completed todos
The system SHALL provide a "Clear completed" action that removes all completed todos.

#### Scenario: Remove all completed
- **WHEN** the user clicks "Clear completed"
- **THEN** all todos with complete = true are removed from the store
