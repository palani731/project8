const Transaction = require('./Transaction.js');

class CardTransaction extends Transaction {

    constructor(data) {
        super();
        this.bank = data.bank;
    }
}

module.exports = CardTransaction;