const RestaurantEmployee = require('./RestaurantEmployee.js');

class Admin extends RestaurantEmployee {

    constructor(data) {
        super();
    }

    searchEmployee() {
        return {
            "name": "name"
        }
    }

    updateEmployee() {
        return true
    }

}

module.exports = Admin;