const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const { registerSchema, loginSchema } = require("../validator/authValidator");

const validate = require("../middlewares/validate");

const {
  registerUser,
  loginUser,
  getMyProfile,
} = require("../controllers/authController");

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

router.get("/profile", protect, getMyProfile);

module.exports = router;
