const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      default: "0",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "I love Danny DeVito",
    },
  },

  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
