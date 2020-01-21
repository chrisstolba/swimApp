const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get("/:id", async (req, res) => {
  const { team, meetID } = req.body;
  const SQLCommand = `SELECT * FROM lineups_${team} WHERE meetid=${meetID} ORDER BY eventid ASC;`;
  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.post("/", async (req, res) => {
  const {
    team,
    meetID,
    eventID,
    swimmerID_1,
    swimmerID_2,
    swimmerID_3,
    swimmerID_4
  } = ref.body;

  const SQLCommand = `INSERT INTO lineups_${team} (meetid, eventid, swimmerid_1, swimmerid_2, swimmerid_3, swimmerid_4) VALUES (${meetID}, ${eventID}, ${swimmerID_1}, ${swimmerID_2}, ${swimmerID_3}, ${swimmerID_4});`;

  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

router.put("/:id", async (req, res) => {
  const {
    team,
    meetID,
    eventID,
    swimmerID_1,
    swimmerID_2,
    swimmerID_3,
    swimmerID_4
  } = ref.body;

  const SQLCommand = `UPDATE lineups_${team} SET meetid=${meetID}, eventid=${eventID}, swimmerid_1=${swimmerID_1}, swimmerid_2=${swimmerID_2}, swimmerid_3=${swimmerID_3}, swimmerid_4=${swimmerID_4} WHERE id=${id};`;

  const conn = await connection(dbConfig).catch(e => console.error(e));
  const results = await query(conn, SQLCommand).catch(e => console.error(e));
  res.send(results);
  res.end();
});

module.exports = router;
