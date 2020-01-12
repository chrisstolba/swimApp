const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const SQLCommand = "SELECT * FROM SWIMMERS;";
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

  res.send(req.body);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`DELETE @ /swimmers/${id}`);

  res.send(id);
});

module.exports = router;
