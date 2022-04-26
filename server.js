const express = require("express");
const app = express();
const PORT = 4000;

// Routes
// Home Page Route
app.get("/", (req, res) => {
  console.log("Home Route");
  res.send("IS THIS WORKING?!?!?");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
