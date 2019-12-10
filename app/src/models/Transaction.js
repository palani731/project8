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
        return bool
    }

    getTransactionDetails(){
        return {
            "trans1": "trans1"
        }
    }
}

module.exports = Transaction;