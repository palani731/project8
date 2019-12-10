var express = require('express');
var router = express.Router();
const DatabaseService = require('../src/services/Database/DatabaseService.js');
const database = new DatabaseService();

router.get('/', function (req, res, next) {
    res.render("reception");
    // database.getList("customers")
    //     .then(result => {
    //     res.send(result); 
    //     },
    //     error => {
    //         console.log(error);
    //     }
    // );
});

module.exports = router;
