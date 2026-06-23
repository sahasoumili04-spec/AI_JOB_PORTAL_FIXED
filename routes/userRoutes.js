const express = require("express");
const router = express.Router();
console.log("Register API Hit");
const {
    registerUser,
    loginUser
} = require("../controller/userController");

// Register a new user
router.post("/register", registerUser);

// Login existing user
router.post("/login", loginUser);

module.exports = router;