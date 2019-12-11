var express = require('express');
var router = express.Router();
const DatabaseService = require('../src/services/Database/DatabaseService.js');
const database = new DatabaseService();

router.get('/', function (req, res, next) {
    database.getList("waitingList")
        .then(result => {
            console.log(result);
            // names = [];
            // promises = [];
            // result.forEach(id => {
            //     promises.push(database.specific("/customers", "phoneNumber", id));
            // });

            // Promise.all(promises)
            //     .then(function (snaps) {
            //         snaps.forEach(function (snap){
            //             const k = Object.keys(snap);
            //             names.push(snap[k].firstName + " " + snap[k].lastName);
            //         })
            //         res.render("reception", {names: names});
            //     })
        },
        error => {
            console.log(error);
        }
    );
});

module.exports = router;
