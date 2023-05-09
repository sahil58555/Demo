const express = require("express");
const app = express();
const data = require("./data.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data,
  });
});

app.post("/", (req, res) => {
  const user = req.body;
  data.push(user);
  res.status(200).send("Done");
});

app.listen(3000, () => {
  console.log("Server is running");
});
