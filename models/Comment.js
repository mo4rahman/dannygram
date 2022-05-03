const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
    },
  },

  { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
