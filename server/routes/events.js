const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("GET @ /events/");
  res.send("GET @ /events/");
});

module.exports = router;
