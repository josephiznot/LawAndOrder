const axios = require("axios");
var crimes = [];
axios
  .get(
    "https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire"
  )
  .then(response => {
    console.log(response.data);
    crimes = response.data.filter((e, i, arr) => {
      return arr.map(element => element.category).indexOf(e.category) === i;
    });
  });
module.exports = {
  gitter: function(req, res, next) {
    res.status(200).json(crimes);
  },
  // putter: function(req, res, next) {
  //   let update = req.params;
  //   crimes[req.params] = req.body;
  //   res.status(200).json(crimes);
  // },
  poster: function(req, res, next) {
    crimes.push(req.body);
    res.status(200).json(crimes);
  },
  deleter: function(req, res, next) {
    let { id } = req.params;
    crimes.splice(id, 1);
    res.status(200).json(crimes);
  }
};
