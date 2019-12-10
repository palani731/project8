const Section = require('./Section.js');
const Kitchen = require('./Kitchen.js');
const WaitingList = require('./WaitingList.js');


class Restaurant {

    constructor(data) {
        this.name = data.name;
        this.address = data.address;
        this.capacity = data.capacity;
        this.specialty = data.specialty;
        this.sections = [];
        this.kitchens = [];
        this.waitingList = new WaitingList (data.waitingList);

        data.sections.forEach(s => {
            this.sections.push(new Section(s));
        });

        data.kitchens.forEach(k => {
            this.kitchens.push(new Kitchen(k));
        });
    }

    getCapacity(){
        return this.capacity;
    }

    getAddress(){
        return this.address;
    }

    getSpecialty(){
        return this.specialty
    }
    
}

module.exports = Restaurant;