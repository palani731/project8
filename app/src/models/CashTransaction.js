const Transaction = require('./Transaction.js');

class CashTransaction extends Transaction {

    constructor(data) {
        super();
        this.change = data.change;
    }
}

module.exports = CashTransaction;