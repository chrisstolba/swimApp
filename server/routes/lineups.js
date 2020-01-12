const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET @ /lineups/");
  res.send("GET @ /lineups/");
});

module.exports = router;
