const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
{
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
        required: true
    },

    resumeLink: {
        type: String,
        default: ""
    },

    coverLetter: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending"
    }
},
{
    timestamps: true
}
);

// Prevent duplicate applications to the same job
applicationSchema.index(
    { applicant: 1, job: 1 },
    { unique: true }
);

module.exports = mongoose.model("Application", applicationSchema);