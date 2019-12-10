class Table {
    constructor(data) {
        this.tableNo = data.tableNo;
        this.occupied = data.occupied;
        this.customerId = data.customerId;
    }

    isOccupied() {
        return this.occupied
    }

    getCustomerId() {
        return this.customerId;
    }

    vacateTable() {
        return true
    }

    assignTable() {
        return true
    }
}

module.exports = Table;