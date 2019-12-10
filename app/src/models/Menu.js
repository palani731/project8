const Dish = require('./Dish.js');

class Menu {

    constructor(data) {
        this.menuId = data.menuId;
        this.menuItems = [];

        data.dishes.array.forEach(d => {
            this.menuItems.push(new Dish(d))
        });
    }

    getMenuItems() {
        return this.menuItems;
    }

}

module.exports = Menu;