const KitchenCounter = require('./KitchenCounter.js');

class Kitchen {

    constructor(data) {
        this.name = data.name;
        this.counters = [];
        data.counters.forEach(counter => {
            this.counters.push(new KitchenCounter(counter))
        });
    }

    getListOfCounters() {
        return this.counters
    }
}

module.exports = Kitchen;