class Dish {

    constructor(data) {
        this.dishId = data.dishId;
        this.dishName = data.dishName;
        this.chefId = data.chefId;
        this.cuisine = data.cuisine;
    }

    getDishName() {
        return this.dishName;
    }

}

module.exports = Dish;