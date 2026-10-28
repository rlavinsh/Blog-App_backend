const express = require("express");
const router = express.Router();

const { registerSchema } = require("../validator/authValidator");

const validate = require("../middlewares/validate");

const { registerUser } = require("../controllers/authController");

router.post("/register", validate(registerSchema), registerUser);

module.exports = router;
