const Notification = require('./Notification.js');

class CleanTableNotification extends Notification {

    constructor(data) {
        super();
        this.tableNo = data.tableNo;
        this.cleanerId = data.cleanerId;
    }
}

module.exports = CleanTableNotification;