const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Register
router.post("/register", authController.registerUser);

// Login
router.post("/login", authController.loginUser);

// Protected route
router.get("/me", authMiddleware, authController.getCurrentUser);

module.exports = router;