const express = require("express");

const taskController  = require("../controllers/feed");

const router = express.Router();
/* ALL ROUTES WILL BE PROTECTED BY A MIDDLEWARE CHECKING FOR A JWT */

// GET /app/tasks
router.get('/tasks', taskController.getTasks);

// GET /app/tasks/!id
router.get('/tasks', taskController.getSingleTask);

// POST /app/tasks
router.post("/tasks", taskController.addTask);

// PATCH /app/tasks/!id
router.patch("/tasks", taskController.updateTask);

// DELETE /app/tasks/!id
router.delete("/tasks", taskController.deleteTask);


module.exports = router;