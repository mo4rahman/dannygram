const express = require("express");
// import express to access Router function

const router = express.Router();
// creates an instance of the router

// MODELS
const db = require("../models");

// ROUTES - http://localhost:4000/comments

// index route - serve a index.ejs template
router.get("/", async (req, res, next) => {
  // res.send('hitting comment index')
  try {
    const allComments = await db.Comment.find({});
    res.send(allComments);
  } catch (err) {
    console.log(error);
    req.error = error;
    return next();
  }
});
// new - serving a new.ejs template
// locahost:4000/comments/new
router.get("/new", async (req, res, next) => {
  try {
    const allPosts = await db.Post.find({});
    // console.log(allPosts)
    const context = { posts: allPosts };
    res.render("comments/new.ejs", context);
  } catch (err) {
    console.log(error);
    req.error = error;
    return next();
  }
});

// create - POST route
router.post("/", async (req, res, next) => {
  try {
    const newCommentData = req.body;
    const newComment = await db.Comment.create(newCommentData);
    console.log(newComment);
    // res.redirect('/comments')
    res.redirect(`/posts/${newComment.post}`);
    // return user to post detail page ->
  } catch (err) {
    console.log(error);
    req.error = error;
    return next();
  }
});
// show - serve a show.ejs template
router.get("/:commentId", async (req, res, next) => {
  // res.send('hitting comment show: '+req.params.commentId)
  try {
    const foundComment = await db.Comment.findById(
      req.params.commentId
    ).populate("post");
    res.render("comments/show.ejs", { comment: foundComment });
  } catch (err) {
    console.log(error);
    req.error = error;
    return next();
  }
});
// update - PUT route
router.put("/:commentId", async (req, res, next) => {
  res.send("hitting comment update: " + req.params.commentId);
});
// edit - GET - serve an edit.ejs
router.get("/:commentId/edit", async (req, res, next) => {
  res.send("hitting comment edit: " + req.params.commentId);
});
// destroy - delete
router.delete("/:commentId", async (req, res, next) => {
  res.send("hitting comment delete: " + req.params.commentId);
});

module.exports = router;
