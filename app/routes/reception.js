var express = require('express');
var router = express.Router();
const DatabaseService = require('../src/services/Database/DatabaseService.js');
const database = new DatabaseService();

router.get('/', function (req, res, next) {
    database.getList("waitingList")
        .then(result => {
            names = [];
            promises = [];
            result.forEach(r => {
                promises.push(database.specific("/customers", "phoneNumber", r.id));
            });

            Promise.all(promises)
                .then(function (snaps) {
                    snaps.forEach(function (snap){
                        const k = Object.keys(snap);
                        names.push(snap[k].firstName + " " + snap[k].lastName);
                    })

                    database.getList("tables")
                    .then(result => {
                        row1Tables = [];
                        row2Tables = [];
                        for (let i = 0; i < 3; i++){
                            row1Tables.push(result[i].occupied);
                        }
                        for (let i = 3; i < 6; i++) {
                            row2Tables.push(result[i].occupied);
                        }
                        res.render("reception", { layout: "otherLayout", names: names, row1Tables, row2Tables });
                    })
                })
        },
        error => {
            console.log(error);
        }
    );
});

module.exports = router;
