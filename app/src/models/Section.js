const Table = require('./Table.js');

class Section {

    constructor(data) {
        this.name = data.name;
        this.tables = [];
        data.tables.forEach(table => {
            this.tables.push(new Table(table))
        });
        this.capacity = data.capacity;
    }

    getListOfTables() {
        return this.tables
    }

    isFull() {
        return this.tables.length >= this.capacity;
    }

    checkAvailableTables() {
        res = []
        this.tables.forEach(t => {
            if (!t.occupied){
                res.push(t)
            }
        });
        return res;
    }
}

module.exports = Section;