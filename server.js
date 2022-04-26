const express = require("express");
const app = express();
const PORT = 4000;

// Home Page Route
app.get("/", (req, res) => {
  res.send("IS THIS WORKING?!?!?");
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
