const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const SQLCommand =
    "SELECT * FROM swimmers WHERE ACTIVE = 1 ORDER BY firstname ASC;";
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const SQLCommand = `SELECT * FROM swimmers WHERE id = ${id};`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.post("/", async (req, res) => {
  const { firstName, lastName, classOf, sex, active } = req.body;
  const SQLCommand = `INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('${firstName}', '${lastName}', ${classOf}, '${sex}', ${active});`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.delete("/:id", async (req, res) => {
  const SQLCommand = `DELETE FROM swimmers WHERE id = ${id};`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

module.exports = router;
