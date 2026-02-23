const express = require("express");
const app = express();

const todos = [
  {
    id: 1,
    title: "Learn Express",
    description: "Understand routing and middleware",
    priority: "High",
    completed: false,
    createdAt: "2026-02-23"
  },
  {
    id: 2,
    title: "Build REST API",
    description: "Create endpoints for CRUD operations",
    priority: "Medium",
    completed: true,
    createdAt: "2026-02-20"
  },
  {
    id: 3,
    title: "Deploy on EC2",
    description: "Run Node server on Ubuntu instance",
    priority: "High",
    completed: false,
    createdAt: "2026-02-22"
  },
  {
    id: 4,
    title: "Learn DevOps basics",
    description: "Process management and ports",
    priority: "Low",
    completed: false,
    createdAt: "2026-02-18"
  },
  {
    id: 5,
    title: "Practice API testing",
    description: "Use curl and Postman",
    priority: "Medium",
    completed: true,
    createdAt: "2026-02-19"
  }
];

app.get("/", (req, res) => {
  res.send("Todo server is running");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
