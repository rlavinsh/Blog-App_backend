const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const { registerSchema, loginSchema } = require("../validator/authValidator");

const validate = require("../middlewares/validate");

const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "You accessed the protected profile route",
    userId: req.userId,
  });
});

module.exports = router;
