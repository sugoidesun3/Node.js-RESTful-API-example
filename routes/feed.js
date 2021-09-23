const express = require("express");

const taskController  = require("../controllers/feed");

const router = express.Router();
/* ALL ROUTES WILL BE PROTECTED BY A MIDDLEWARE CHECKING FOR A JWT */
// (currently not implemented)

// GET /app/feed/tasks
router.get('/tasks', taskController.getTasks);

// GET /app/feed/tasks/:id
router.get('/tasks/:id', taskController.getSingleTask);

// POST /app/feed/tasks
router.post("/tasks", taskController.addTask);

// PUT /app/feed/tasks/:id
router.put("/tasks/:id", taskController.updateTask);

// DELETE /app/feed/tasks/:id
router.delete("/tasks/:id", taskController.deleteTask);


module.exports = router;