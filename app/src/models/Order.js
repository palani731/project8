const Dish = require('./Dish.js');

class Order {

    constructor(data) {
        this.orderNo = data.orderNo;
        this.tableNo = data.tableNo;
        this.customerId = data.customerId;
        this.dishesOrdered = [];

        data.dishesOrdered.forEach(d => {
            this.dishesOrdered.push(new Dish(d))
        });
    }

    getDishesOrdered() {
        return this.dishesOrdered;
    }

}

module.exports = Order;