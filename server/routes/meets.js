const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const SQLCommand = "SELECT * FROM meets ORDER BY date;";
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

router.post("/", async (req, res) => {
  const { name, location, date } = req.body;
  const SQLCommand = `INSERT INTO meets (name, location, date) VALUES (${name}, ${location}, ${date});`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

router.delete("/:id", async (req, res) => {
  const SQLCommand = `DELETE FROM meets WHERE id=${id};`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

module.exports = router;
