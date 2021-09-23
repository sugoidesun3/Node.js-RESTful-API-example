const express = require("express");

const authController  = require("../controllers/auth");

const router = express.Router();

// GET /app/auth/login
router.get("/login", authController.logIn);

// POST /app/auth/signup
router.post("/signup", authController.signUp);

// DELETE /app/auth/delete/:id (protected route)
router.delete("/delete/:id", authController.deleteAccount);

module.exports = router;