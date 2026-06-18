require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
console.log(process.env.MONGO_URI);
connectDB();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("AI Job Portal Backend Running");
});

const PORT = process.env.PORT || 50000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});