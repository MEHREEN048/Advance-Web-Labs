
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// In-memory database
let todos = [
  { id: 1, task: 'Learn Express.js', completed: false },
  { id: 2, task: 'Build a Full-Stack App', completed: false }
];

// GET: Get all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// POST: Add a new todo (prevent duplicates)
app.post('/todos', (req, res) => {
  const { task } = req.body;

  // Validate input
  if (typeof task !== 'string' || !task.trim()) {
    return res.status(400).json({
      message: 'Task is required and cannot be empty.'
    });
  }

  const cleanTask = task.trim();

  // Check for duplicate tasks
  const exists = todos.some(
    todo => todo.task.toLowerCase() === cleanTask.toLowerCase()
  );

  if (exists) {
    return res.status(409).json({
      message: 'This task already exists!'
    });
  }

  // Generate a unique ID
  const newTodo = {
    id: todos.length
      ? Math.max(...todos.map(todo => todo.id)) + 1
      : 1,
    task: cleanTask,
    completed: false
  };

  todos.push(newTodo);

  return res.status(201).json({
    message: 'Task created successfully!',
    todo: newTodo
  });
});

// PUT: Update a todo
app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(item => item.id === id);

  if (!todo) {
    return res.status(404).json({
      message: 'To-Do not found.'
    });
  }

  const { task, completed } = req.body;

  if (task !== undefined) {
    if (typeof task !== 'string' || !task.trim()) {
      return res.status(400).json({
        message: 'Task cannot be empty.'
      });
    }

    // Prevent renaming a task to a duplicate
    const duplicate = todos.some(
      item =>
        item.id !== id &&
        item.task.toLowerCase() === task.trim().toLowerCase()
    );

    if (duplicate) {
      return res.status(409).json({
        message: 'Another task already has this name.'
      });
    }

    todo.task = task.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({
        message: 'Completed must be true or false.'
      });
    }

    todo.completed = completed;
  }

  return res.status(200).json({
    message: 'Task updated successfully!',
    todo
  });
});

// DELETE: Delete a todo
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const exists = todos.some(todo => todo.id === id);

  if (!exists) {
    return res.status(404).json({
      message: 'To-Do not found.'
    });
  }

  todos = todos.filter(todo => todo.id !== id);

  return res.status(204).send();
});

// Handle invalid JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      message: 'Invalid JSON request body.'
    });
  }

  return res.status(500).json({
    message: 'Internal server error.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
