const Application = require("../models/application");
const Job = require("../models/job");

// Apply for a job
const applyForJob = async (req, res) => {
  try {

    const { job, resumeLink, coverLetter } = req.body;

    const applicant = req.user.id;

    const existingApplication = await Application.findOne({
      applicant,
      job
    });

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job"
      });
    }

    const application = await Application.create({
      applicant,
      job,
      resumeLink,
      coverLetter
    });

    await Job.findByIdAndUpdate(job, {
      $inc: { applicationsCount: 1 }
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get all applications
const getAllApplications = async (req, res) => {
  try {

    const applications = await Application.find()
      .populate("applicant", "name email")
      .populate("job", "title company");

    res.status(200).json({
      success: true,
      count: applications.length,
      applications
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get application by ID
const getApplicationById = async (req, res) => {
  try {

    const application = await Application.findById(req.params.id)
      .populate("applicant", "name email")
      .populate("job", "title company");

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }

    res.status(200).json({
      success: true,
      application
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update application status
const updateApplicationStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true
      }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      application
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Delete application
const deleteApplication = async (req, res) => {
  try {

    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found"
      });
    }

    await application.deleteOne();

    res.status(200).json({
      success: true,
      message: "Application deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  applyForJob,
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  deleteApplication
};