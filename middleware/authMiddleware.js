const jwt = require("jsonwebtoken");

// Protect Routes (JWT Authentication)
const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};

// Employer Authorization
const authorizeEmployer = (req, res, next) => {

  if (req.user.role !== "employer") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Employers only."
    });
  }

  next();
};

// Job Seeker Authorization
const authorizeJobSeeker = (req, res, next) => {

  if (req.user.role !== "jobseeker") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Job Seekers only."
    });
  }

  next();
};

module.exports = {
  protect,
  authorizeEmployer,
  authorizeJobSeeker
};