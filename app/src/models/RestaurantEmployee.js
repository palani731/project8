class RestaurantEmployee {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.phoneNumber = data.phoneNumber;
        this.address = data.address;
        this.postCode = data.postCode;
        this.city = data.city;
        this.country = data.country;
        this.employeeType = data.employeeType;
        this.shift = data.shift;
        this.password = data.password;
    }
}

module.exports = RestaurantEmployee;