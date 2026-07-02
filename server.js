require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");


connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("AI Job Portal Backend Running");
});

const PORT = process.env.PORT || 50000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
