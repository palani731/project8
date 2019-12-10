const Notification = require('./Notification.js');

class TableAvailabilityNotification extends Notification {

    constructor(data) {
        super();
        this.customerId = data.customerId;
        this.tableNo = data.tableNo;
    }
}

module.exports = TableAvailabilityNotification;