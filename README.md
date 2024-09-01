Sure! Here's a README for your Node.js command-line application that allows users to manage tasks via arguments and stores them in a JSON file.

---

# Task Manager CLI

A simple command-line application for managing tasks using Node.js. This application allows users to add, update, delete, and manage tasks, as well as mark tasks as in progress or done. Tasks are stored in a JSON file.

## Features

- **Add a task**
- **Update a task**
- **Delete a task**
- **Mark a task as in progress or done**
- **List all tasks**
- **List all tasks that are done**
- **List all tasks that are not done**
- **List all tasks that are in progress**

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

## Usage

### Adding a Task

To add a new task, use the following command:

```bash
node index.js add "Task description"
```

Replace `"Task description"` with your task's description.

### Updating a Task

To update an existing task, use the following command:

```bash
node index.js update <task-id> "New task description"
```

Replace `<task-id>` with the ID of the task you want to update and `"New task description"` with the updated description.

### Deleting a Task

To delete a task, use the following command:

```bash
node index.js delete <task-id>
```

Replace `<task-id>` with the ID of the task you want to delete.

### Marking a Task

To mark a task as in progress or done, use the following command:

```bash
node index.js mark <task-id> <status>
```

Replace `<task-id>` with the ID of the task you want to update and `<status>` with either `in-progress` or `done`.

### Listing Tasks

To list all tasks, use:

```bash
node index.js list
```

To list all tasks that are done, use:

```bash
node index.js list done
```

To list all tasks that are not done, use:

```bash
node index.js list not-done
```

To list all tasks that are in progress, use:

```bash
node index.js list in-progress
```

## JSON File Storage

Tasks are stored in a JSON file named `tasks.json` in the project directory. The file format is as follows:

```json
[
  {
    "id": "1",
    "description": "Sample task",
    "status": "not-done"
  }
]
```

- **id**: Unique identifier for the task.
- **description**: Description of the task.
- **status**: Status of the task (`not-done`, `in-progress`, or `done`).

## Example

```bash
node index.js add "Write README file"
node index.js list
node index.js mark 1 in-progress
node index.js list in-progress
node index.js update 1 "Update README file"
node index.js delete 1
```

## Contributing

If you have suggestions or improvements, please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the repository URL, directory names, and any specific details to fit your project's structure and requirements. If you have any further questions or need additional sections, let me know!
