var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "Hagay Kassa"
  },
  {
    "id": 2,
    "name": "Simcha Balay"
  },
  {
    "id": 3,
    "name": "Yakov Avraham"
  }
  {
    "id": 4,
    "name": "megi mentesnot"
  }
];
  res.send(users);
});

module.exports = router;
