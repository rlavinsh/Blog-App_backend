const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Testing route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BlogApp API chal rahi hein!",
  });
});

module.exports = app;
