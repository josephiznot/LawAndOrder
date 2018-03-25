const express = require("express");
const app = express();
const { json } = require("body-parser");
const port = 3010;
const axios = require("axios");
app.use(json());
const restCtrls = require("./Controllers/restCtrls");

var crimes = [];
app.get("/api/crimes", restCtrls.gitter);
// app.put("/api/crimes/:id", restCtrls.putter);
app.post("/api/crimes", restCtrls.poster);
app.delete("/api/crimes/:id", restCtrls.deleter);
app.listen(port, function() {
  console.log(`I am listening at port ${port}`);
});
