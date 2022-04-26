const express = require("express");
const app = express();
const PORT = 4000;
const methodOverride = require("method-override");

app.set("view engine", "ejs");

/* 
    EXPRESS Middleware
*/
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

// Routes
// Home Page Route
app.get("/", (req, res) => {
  res.send("Welcome to dannygram ❤️");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
