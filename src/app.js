const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes");

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/v1/auth", authRoutes);

// Testing route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BlogApp API chal rahi hein!",
  });
});

module.exports = app;
