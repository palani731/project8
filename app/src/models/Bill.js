class Bill {

    constructor(data) {
        this.billNo = data.billNo;
        this.tableNo = data.tableNo;
        this.paymentMethod = data.paymentMethod;
        this.content = [];
        this.customerId = data.customerId;
        this.billTotal = data.billTotal;
    }

    getBillContent() {
        return this.content;
    }

    getBillNo() {
        return this.billNo;
    }

    getBillTotal() {
        return this.billTotal;
    }

    getCustomerId() {
        return this.customerId;
    }

    getPaymentMethod() {
        return this.paymentMethod;
    }

}

module.exports = Bill;