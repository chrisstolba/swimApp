const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET @ /races/");
  res.send("GET @ /races/");
});

module.exports = router;