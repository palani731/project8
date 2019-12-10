class Customer {

    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.phoneNumber = data.phoneNumber;
        this.customerId = data.customerId;
        this.visits = [];
    }

    getVisitsList() {
        return this.visits;
    }

    placeOrder(){
        return true;
    }

    makeRequest(){
        return true;
    }

    giveFeedback() {
        return true;
    }

    payBill() {
        return true;
    }

    checkout(){
        return true;
    }

}

module.exports = Customer;