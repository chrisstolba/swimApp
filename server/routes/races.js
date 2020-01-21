const express = require("express");
const router = express.Router();

const dbConfig = require("../dbConfig");
const connection = require("../helpers/connection");
const query = require("../helpers/query");

router.get(
  "/:team/:meetID/:eventID/:swimmerID/:sortField/:resPerSwimmer",
  async (req, res) => {
    const { team, meetID, eventID, swimmerID, sortField } = req.params;

    let SQLCommand = `SELECT r.id, r.time, m.date, e.name, e.cons${team}, e.auto${team}, s.firstname, s.lastname, s.class FROM (((races_${team} AS r INNER JOIN meets AS m ON r.meetid = m.id) INNER JOIN events AS e ON r.eventid = e.id) INNER JOIN swimmers as s ON r.swimmerid = s.id)`;

    if (meetID !== "null") {
      SQLCommand += ` WHERE meetid=${meetID}`;
    }

    if (eventID !== "null") {
      if (meetID !== "null") {
        SQLCommand += ` AND eventid=${eventID}`;
      } else {
        SQLCommand += ` WHERE eventid=${eventID}`;
      }
    }

    if (swimmerID !== "null") {
      if (meetID !== "null" || eventID !== "null") {
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
  }
);

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
