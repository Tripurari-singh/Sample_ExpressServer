const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let todos = []; // In-memory storage

// Home
app.get('/', (req, res) => {
  res.send('Simple Todo API is running ');
});

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const todo = { id: Date.now(), title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// Toggle todo completed
app.patch('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.completed = !todo.completed;
  res.json(todo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "Todo deleted " });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});
