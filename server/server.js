require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/swimmers", require("./routes/swimmers"));
app.use("/meets", require("./routes/meets"));
app.use("/events", require("./routes/events"));
app.use("/races", require("./routes/races"));
app.use("/lineups", require("./routes/lineups"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
