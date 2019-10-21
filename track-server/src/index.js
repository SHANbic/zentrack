const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const keys = require("../env");
const app = express();

mongoose.connect(keys.MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.get("/", (req, res) => {
  res.send("hi there");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", err => {
  console.error("Error connecting to mongo", err);
});

app.listen(PORT, () => console.log("Server started on", PORT));
