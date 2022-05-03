// import express to access Router function
const express = require("express");

// creates an instance of the router
const router = express.Router();

/* 
    App Data:
*/

// MODELS
const db = require("../models");

// express.Router breakdown
// in server.js we have the following code - app.use('/posts', posts_controller)

// the posts controller's express.Router will then take on processing the request:

// app.use passes the request {} to the posts_controller.js module
// the request evaluates the available routes in the module
// if a matching URL path is found, that route's callback is executed
// otherwise, the remaining routes in server.js (after the middleware) will execute

/*  Beginning of Post routes */

// get all posts route (index)
router.get("/", async (req, res, next) => {
  try {
    const posts = await db.Post.find({});
    const allComments = await db.Comment.find({});
    const context = { posts, comments: allComments };
    return res.render("index.ejs", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// Post "new" route - GET request- displays form for creating a new product

router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Posts "show" route - GET request - display details about one post
// http://localhost:4000/posts/0

router.get("/:id/", async (req, res, next) => {
  try {
    const foundPost = await db.Post.findById(req.params.id);
    const allComments = await db.Comment.find({ post: req.params.id });
    const context = {
      onePost: foundPost,
      comments: allComments,
      message: "Hello there",
    };
    return res.render("show.ejs", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// Posts "edit" route - GET request - display an edit form for one post
// http://localhost:4000/posts/0/edit

router.get("/:id/edit", async (req, res, next) => {
  try {
    const updatedPost = await db.Post.findById(req.params.id);
    const context = {
      post: updatedPost,
    };
    return res.render("edit.ejs", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// Post "create" route - POST request -> request body (new post data)

// http://localhost:4000/posts/

router.post("/", async (req, res, next) => {
  try {
    const createdPost = await db.Post.create(req.body);
    res.redirect("/posts");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// Post "destroy" route - DELETE request - removes data from posts database and redirects to index route

// http://localhost:4000/posts/0/

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedPost = await db.Post.findByIdAndDelete(req.params.id);
    return res.redirect("/posts");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// Posts "update" route - PUT request - update the Posts array and redirects to show route
// http://localhost:4000/posts/0/

router.put("/:id", async (req, res, next) => {
  try {
    const updatedPost = await db.Post.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.redirect(`/posts`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
