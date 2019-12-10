class Transaction {
    constructor(data) {
        this.transactionId = data.transactionId;
        this.customerId = data.customerId;
        this.tableNo = data.tableNo;
        this.createdOn = Date.now();
        this.content = data.content;
        this.amount = data.amount;
        this.tip = data.tip;
    }

    makeTransaction(){
        return true
    }

    getTransactionDetails(){
        return this.content;
    }
}

module.exports = Transaction;