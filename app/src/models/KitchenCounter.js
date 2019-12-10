class KitchenCounter {
    constructor(data) {
        this.counterId = data.counterId;
        this.chefs = data.chefs;
    }

    getListOfChefs() {
        return this.chefs;
    }
}

module.exports = KitchenCounter;