const express = require("express");
const router = express.Router();

const protect = require("../middlewares/authMiddleware");
const validate = require("../middlewares/validate");

const { createPostSchema } = require("../validator/postValidator");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.post("/", protect, validate(createPostSchema), createPost);

router.get("/", getAllPosts);

router.get("/:id", getPostById);

router.put("/:id", protect, updatePost);

router.delete("/:id", protect, deletePost);

module.exports = router;
