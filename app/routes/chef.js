var express = require('express');
var router = express.Router();
const DatabaseService = require('../src/services/Database/DatabaseService.js');
const database = new DatabaseService();

/* GET home page. */
router.get('/dessert', function(req, res, next) {
    database.getList("/orders")
    .then (result => {
        chefsOrders = []
        result.forEach(ord => {
            if (parseInt(ord.dishesOrdered[2].quantity) > 0 && !ord.completed){
                chefsOrders.push(ord);
            }
        });
        res.render('dessert', {orders: chefsOrders});
    })
});

router.get('/pasta', function(req, res, next) {
    database.getList("/orders")
    .then (result => {
        chefsOrders = []
        result.forEach(ord => {
            if (parseInt(ord.dishesOrdered[1].quantity) > 0 && !ord.completed){
                chefsOrders.push(ord);
            }
        });
        res.render('pasta', {orders: chefsOrders});
    })
});

module.exports = router;
