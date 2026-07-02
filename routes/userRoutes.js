const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
   getPublicProfile
} = require("../controller/userController");

const {
  protect
} = require("../middleware/authMiddleware");

// Register a new user
router.post("/register", registerUser);

// Login existing user
router.post("/login", loginUser);

// Get Logged-in User Profile
router.get("/profile", protect, getUserProfile);

// Public Profile
router.get("/profile/:email", getPublicProfile);

module.exports = router;