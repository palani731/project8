class Feedback {

    constructor(data) {
        this.feedbackNo = data.feedbackNo;
        this.tableNo = data.tableNo;
        this.customerId = data.customerId;
        this.content = data.content;
        this.rating = data.rating;
    }
}

module.exports = Feedback;