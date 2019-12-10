const RestaurantEmployee = require('./RestaurantEmployee.js');

class Cleaner extends RestaurantEmployee {

    constructor(data) {
        super();
    }

    cleanTable() {
        return true
    }

}

module.exports = Cleaner;