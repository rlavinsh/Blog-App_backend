const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const { title, content, category, coverImage } = req.body;

    const post = await Post.create({
      title,
      content,
      category,
      coverImage,
      author: req.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    console.error("Create post error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  createPost,
};
