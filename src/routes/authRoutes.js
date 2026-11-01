const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");

const {
  registerSchema,
  loginSchema,
  updateProfileSchema,
} = require("../validator/authValidator");

const validate = require("../middlewares/validate");

const {
  registerUser,
  loginUser,
  getMyProfile,
  updateMyProfile,
  logoutUser,
} = require("../controllers/authController");

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

router.get("/profile", protect, getMyProfile);
router.put("/profile", protect, validate(updateProfileSchema), updateMyProfile);

router.post("/logout", logoutUser);

module.exports = router;
