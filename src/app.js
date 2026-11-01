const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const authRoutes = require("./routes/authRoutes");

const postRoutes = require("./routes/postRoutes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", postRoutes);

// Testing route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BlogApp API chal rahi hein!",
  });
});

module.exports = app;
