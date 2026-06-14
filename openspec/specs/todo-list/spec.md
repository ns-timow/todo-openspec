## ADDED Requirements

### Requirement: Add a todo
The system SHALL allow the user to create a new todo by typing text into the input field and pressing Enter.

#### Scenario: Create todo on Enter
- **WHEN** the user types non-empty text in the input field and presses Enter
- **THEN** a new todo with that text is appended to the list and the input field is cleared

#### Scenario: Ignore empty input
- **WHEN** the user presses Enter with an empty or whitespace-only input
- **THEN** no todo is created and the input field remains empty

### Requirement: Toggle a todo complete
The system SHALL allow the user to mark a todo as complete or incomplete by clicking its checkbox.

#### Scenario: Mark complete
- **WHEN** the user clicks the circle checkbox of an incomplete todo
- **THEN** the checkbox shows a green checkmark circle and the todo text renders with a strikethrough

#### Scenario: Mark incomplete
- **WHEN** the user clicks the filled checkbox of a completed todo
- **THEN** the checkbox returns to an empty circle and the todo text renders without strikethrough

### Requirement: Display todo list
The system SHALL display all todos (subject to the active filter) as a vertical list of rows, each with a checkbox and label.

#### Scenario: Unchecked todo row
- **WHEN** a todo is incomplete
- **THEN** its row shows an empty circle checkbox and normal-weight dark text

#### Scenario: Checked todo row
- **WHEN** a todo is complete
- **THEN** its row shows a green checkmark circle and muted strikethrough text

### Requirement: Toggle all todos
The system SHALL provide a toggle-all control that marks all todos complete (or all incomplete if all are already complete).

#### Scenario: Toggle all to complete
- **WHEN** at least one todo is incomplete and the user activates the toggle-all chevron
- **THEN** all todos are marked complete

#### Scenario: Toggle all to incomplete
- **WHEN** all todos are complete and the user activates the toggle-all chevron
- **THEN** all todos are marked incomplete
