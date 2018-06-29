require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = 3010;
const axios = require("axios");
const restCtrls = require("./Controllers/restCtrls");

app.use(json());
app.use(express.static(`${__dirname}/../build`));

app.get("/api/crimes", restCtrls.gitter);
app.put("/api/crimes/:id", restCtrls.putter);
app.post("/api/crimes", restCtrls.poster);
app.delete("/api/crimes/:id", restCtrls.deleter);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, function() {
  console.log(`I am listening at port ${port}`);
});
