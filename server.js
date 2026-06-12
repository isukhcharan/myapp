const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
const replicaName = process.env.APP_NAME;

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`request served by ${replicaName}`);

});

app.listen(PORT, () => {
  console.log(`${replicaName} listening on port ${PORT}!`);

});
