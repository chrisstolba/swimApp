const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/", async (req, res) => {
  const { team, meetID, eventID, swimmerID, sortField } = req.body;

  let SQLCommand = `SELECT * FROM races_{team}`;

  if (meetID) {
    SQLCommand += ` WHERE meetid=${meetID}`;
  }

  if (eventID) {
    if (meetID) {
      SQLCommand += ` AND eventid=${eventID}`;
    } else {
      SQLCommand += ` WHERE eventid=${eventID}`;
    }
  }

  if (swimmerID) {
    if (meetID || eventID) {
      SQLCommand += ` AND swimmerid=${swimmerID}`;
    } else {
      SQLCommand += ` WHERE swimmerid=${swimmerID}`;
    }
  }
  SQLCommand += ` ORDER BY ${sortField} ASC;`;

  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.post("/", async (req, res) => {
  const { team, meetID, eventID, swimmerID, time } = req.body;
  const SQLCommand = `INSERT INTO races_${team} (meetid, eventid, swimmerid, time) VALUES (${meetID}, ${eventID}, ${swimmerID}, ${time});`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.delete("/:id", async (req, res) => {
  const { team } = req.body;
  const SQLCommand = `DELETE FROM races_{team} WHERE id=${id};`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

module.exports = router;
