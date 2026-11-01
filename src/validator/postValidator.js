const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string().trim().min(3).max(150).required(),
  content: Joi.string().trim().min(1).required(),
  category: Joi.string().trim().required(),
  coverImage: Joi.string().trim().allow("").optional(),
});

module.exports = {
  createPostSchema,
};
