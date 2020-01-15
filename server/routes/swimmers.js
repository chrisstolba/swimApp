const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const SQLCommand = "SELECT * FROM SWIMMERS WHERE ACTIVE = 1;";
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const SQLCommand = `SELECT * FROM SWIMMERS WHERE id = ${id};`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

router.post("/", async (req, res) => {
  console.log(`POST @ /swimmers/`);
  const { firstName, lastName, classOf, sex, active } = req.body;
  const SQLCommand = `INSERT INTO swimmers (firstname, lastname, class, sex, active) VALUES ('${firstName}', '${lastName}', ${classOf}, '${sex}', ${active});`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
});

module.exports = router;
