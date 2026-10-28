const express = require("express");
const router = express.Router();

const { registerSchema, loginSchema } = require("../validator/authValidator");

const validate = require("../middlewares/validate");

const { registerUser, loginUser } = require("../controllers/authController");

router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

module.exports = router;
