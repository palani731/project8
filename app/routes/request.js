var express = require('express');
var router = express.Router();

/* GET request page. */
router.get('/', function(req, res, next) {
  res.render('request', { layout: "customerLayout" });
});

module.exports = router;
