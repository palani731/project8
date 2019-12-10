const RestaurantEmployee = require('./RestaurantEmployee.js');

class Waiter extends RestaurantEmployee {

    constructor(data) {
        super();
    }

    completeRequest() {
        return true
    }

}

module.exports = Waiter;