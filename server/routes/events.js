const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const SQLCommand = "SELECT * FROM EVENTS";
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

module.exports = router;
