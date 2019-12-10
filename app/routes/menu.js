var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('menu');
});

router.get('/ordered', function(req, res, next) {
    res.render("ordered");
  });

module.exports = router;