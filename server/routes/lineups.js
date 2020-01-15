const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/:meetId", async (req, res) => {
  const SQLCommand = "SELECT * FROM LINEUPS WHERE MEETID = ${meetId}";
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

// Lineups need to be PATCHed or PUTed because 1 for every event and sex will be auto-created when the meet is created.

module.exports = router;
