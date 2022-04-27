const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment:{
        type: String
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "Post"
    }
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
  },

  { timestamps: true }
);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
