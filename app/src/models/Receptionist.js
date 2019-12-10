const RestaurantEmployee = require('./RestaurantEmployee.js');

class Receptionist extends RestaurantEmployee {

    constructor(data) {
        super();
    }

    vacateTable() {
        return true
    }

    addCustomer() {
        return true
    }

    updateCustomer() {
        return true
    }

    checkCustomerInfo() {
        return true
    }

}

module.exports = Receptionist;