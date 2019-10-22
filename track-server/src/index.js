require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const keys = require("../env");
const app = express();
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

mongoose.connect(keys.MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email is ${req.user.email}`);
});

mongoose.connection.on("error", err => {
  console.error("Error connecting to mongo", err);
});

app.listen(PORT, () => console.log("Server started on", PORT));
