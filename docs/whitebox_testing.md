# Whitebox Testing Report

## 1. Statement Coverage
All executable statements in the code are covered by tests.

| Statement | Covered |
|-----------|---------|
| Add Task  | Yes |
| View Tasks | Yes |
| Delete Task | Yes |

## 2. Block Coverage
All decision blocks are tested:
- `if (!task)` block tested.
- `if (index >= tasks.length)` block tested.

## 3. Path Coverage
All possible paths:
- Add a valid task
- Add an invalid task (empty body)
- Get tasks when tasks exist
- Delete a task with valid index
- Delete with invalid index

### Path Coverage Diagram
```mermaid
flowchart TD
    A[Start] --> B{POST /task}
    B -- Valid --> C[Add Task]
    B -- Invalid --> D[Return 400]
    C --> E{GET /tasks}
    E --> F[Return List]
    F --> G{DELETE /task/:index}
    G -- Valid --> H[Delete Task]
    G -- Invalid --> I[Return 400]
    H --> End
    I --> End
