class Transaction {
    constructor(data) {
        this.notificationId = data.notificationId;
        this.createdOn = Date.now()
        this.content = data.content;
    }

    sendNotification() {
        return true
    }
}

module.exports = Transaction;