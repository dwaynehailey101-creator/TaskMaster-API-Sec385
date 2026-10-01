const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("TaskMaster Node API Running");
});

app.listen(8080, () => console.log("Node API running on port 8080"));
