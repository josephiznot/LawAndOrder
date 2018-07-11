require("dotenv").config();
const express = require("express");
const app = express();
const port = 3010;
const restCtrls = require("./Controllers/restCtrls");
const session = require("express-session");

app.use(express.json());
// app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: process.env.VICTORIAS_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 10 //10 minutes
    }
  })
);

app.use((req, res, next) => {
  if (!req.session.traffic) {
    req.session.traffic = {};
  }
  if (!req.session.traffic[req.method + req.originalUrl]) {
    req.session.traffic[req.method + req.originalUrl] = {};
  }

  next();
});

app.use((req, res, next) => {
  let views = req.session.traffic[req.method + req.originalUrl].views || 0;
  req.session.traffic[req.method + req.originalUrl] = {
    method: req.method,
    views: views + 1
  };
  next();
  console.log(req.session.traffic);
});

app.get("/api/crimes", restCtrls.gitter);
app.put("/api/crimes/:id", restCtrls.putter);
app.post("/api/crimes", restCtrls.poster);
app.delete("/api/crimes/:id", restCtrls.deleter);

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(port, function() {
  console.log(`I am listening at port ${port}`);
});
