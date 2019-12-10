const RestaurantEmployee = require('./RestaurantEmployee.js');

class Chef extends RestaurantEmployee {

    constructor(data) {
        super();
        this.specialty = data.specialty;   
    }

    completeOrder() {
        return true
    }

}

module.exports = Chef;