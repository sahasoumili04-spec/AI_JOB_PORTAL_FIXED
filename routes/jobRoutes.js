const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getMyJobs
} = require("../controller/jobController");

const {
  protect,
  authorizeEmployer
} = require("../middleware/authMiddleware");

// Create Job (Employer Only)
router.post(
  "/",
  protect,
  authorizeEmployer,
  createJob
);
// Get Jobs Posted By Logged-in Employer
router.get(
  "/my-jobs",
  protect,
  authorizeEmployer,
  getMyJobs
);

// Get All Jobs (Public)
router.get("/", getAllJobs);

// Get Single Job (Public)
router.get("/:id", getJobById);

// Update Job (Employer Only)
router.put(
  "/:id",
  protect,
  authorizeEmployer,
  updateJob
);

// Delete Job (Employer Only)
router.delete(
  "/:id",
  protect,
  authorizeEmployer,
  deleteJob
);

module.exports = router;