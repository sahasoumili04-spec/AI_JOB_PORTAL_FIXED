const express = require("express");
const router = express.Router();

const {
  applyForJob,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication
} = require("../controller/applicationController");

const {
  protect,
  authorizeJobSeeker
} = require("../middleware/authMiddleware");

// Apply for a Job (Protected Route)
router.post(
  "/",
  protect,
  authorizeJobSeeker,
  applyForJob
);

// Get All Applications
router.get("/", getAllApplications);

// Get Single Application
router.get("/:id", getApplicationById);

// Update Application Status
router.put("/:id", updateApplicationStatus);

// Delete Application
router.delete("/:id", deleteApplication);

module.exports = router;