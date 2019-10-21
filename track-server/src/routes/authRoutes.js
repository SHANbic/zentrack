const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("post request");
});

module.exports = router;
