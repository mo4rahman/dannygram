const express = require("express");
require("./config/db.connection"); // db connection
const controllers = require("./controllers");
require("dotenv").config(); // getting access to grab secret vars

const app = express();
const PORT = process.env.PORT || 4001;
const methodOverride = require("method-override");

app.set("view engine", "ejs");

/* 
    EXPRESS Middleware
*/
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use("/posts", controllers.posts); // "posts" router
app.use("/comments", controllers.comments); // "comments" router

// Routes
// Home Page Route
app.get("/", (req, res) => {
  res.redirect("/posts");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
