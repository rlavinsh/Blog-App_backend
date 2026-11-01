const jwt = require("jsonwebtoken");

function protect(req, res, next) {
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login first",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token is invalid or expired",
    });
  }
}

module.exports = protect;
