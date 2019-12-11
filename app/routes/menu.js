var express = require('express');
var router = express.Router();

/* GET menu page. */
router.get('/', function(req, res, next) {
  res.render('menu', { layout: "customerLayout" });
});

router.get('/ordered', function(req, res, next) {
  res.render("ordered", { layout: "customerLayout" });
  });

module.exports = router;