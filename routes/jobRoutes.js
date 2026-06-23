const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob
} = require("../controller/jobController");

// Create Job
const { protect } = require("../middleware/authMiddleware");
router.post("/", protect, createJob);

// Get All Jobs
router.get("/", getAllJobs);

// Get Single Job
router.get("/:id", getJobById);

// Update Job
router.put("/:id", updateJob);

// Delete Job
router.delete("/:id", deleteJob);

module.exports = router;