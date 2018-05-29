const axios = require("axios");
var crimes = [];
let newId = 10000000000;
axios
  .get(
    "https://data.police.uk/api/crimes-no-location?category=all-crime&force=leicestershire"
  )
  .then(response => {
    crimes = response.data;
  });
//
// To filter through the api and only receive one category of each crime>>>>
//
//    crimes = response.data.filter((e, i, arr) => {
//   return arr.map(element => element.category).indexOf(e.category) === i;
// });
//
module.exports = {
  gitter: function(req, res, next) {
    res.status(200).json(crimes);
  },
  putter: function(req, res, next) {
    let { id } = req.params;
    let { categoryInput, outcome_statusInput } = req.body;

    var index = crimes.findIndex(crime => Number(crime.id) === Number(id));
    crimes[index].category = categoryInput;
    crimes[index].outcome_status.category = outcome_statusInput;
    res.status(200).json(crimes);
  },
  poster: function(req, res, next) {
    let { category, outcome_status } = req.body;
    let id = newId;
    crimes.push({ category, outcome_status, id });
    res.status(201).json(crimes);
    newId++;
  },
  deleter: function(req, res, next) {
    let { id } = req.params;
    var index = crimes.findIndex(crime => Number(crime.id) === Number(id));
    crimes.splice(index, 1);
    res.status(200).json(crimes);
  }
};
