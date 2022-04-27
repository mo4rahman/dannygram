// Post model
// POSTS
// 	- Caption
// 	- Number of likes
// 	-Array of comments (all strings)
// 	- Username of the person who posted it (Somehow associated to USER)

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    comments: [
      {
        type: String,
      },
    ],
    // user: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
  },

  { timestamps: true }
);

// const postSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "name cannot be empty :("],
//     },
//     price: {
//       type: Number,
//       min: [0, "you cannot add a negative number!"],
//       required: [true, "price cannot be empty!"],
//     },
//     image: {
//       type: String,
//       required: [true, "image cannot be empty!"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
