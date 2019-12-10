class Request {

    constructor(data) {
        this.requestNo = data.requestNo;
        this.tableNo = data.tableNo;
        this.customerId = data.customerId;
        this.content = data.content;
    }
}

module.exports = Request;