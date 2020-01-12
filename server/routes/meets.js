const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET @ /meets/");
  res.send("GET @ /meets/");
});

module.exports = router;
