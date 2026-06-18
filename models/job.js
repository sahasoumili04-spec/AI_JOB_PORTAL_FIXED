const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true
    },

    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true
    },

    description: {
        type: String,
        required: [true, "Job description is required"]
    },

    location: {
        type: String,
        required: [true, "Location is required"]
    },

    salary: {
        type: Number,
        required: [true, "Salary is required"]
    },

    skillsRequired: {
        type: [String],
        default: []
    },

    jobType: {
        type: String,
        enum: ["Full-Time", "Part-Time", "Internship", "Remote"],
        default: "Full-Time"
    },

    experienceLevel: {
        type: String,
        enum: ["Fresher", "Junior", "Mid-Level", "Senior"],
        default: "Fresher"
    },

    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    applicationsCount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Job", jobSchema);