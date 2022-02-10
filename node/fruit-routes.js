const express = require("express");
const FruitService = require("./fruit-service");

class FruitRoutes {

    /**
    * Setups the routes for fruit related REST api calls
    */
    static setup(root) {
        const fruitRouter = express.Router();

        fruitRouter.get('/fruits', (request, response) => {
            FruitService.getAllFruits(request, response);
        });

        /**
        * TODO-3 - need to expose an api that allows a caller to get a specific fruit in the system
        * @requirements use the @FruitService methods to interact with the fruit inventory
        * @requirements take consideration when fruit does not exist
        * @notes remember all methods are @see async on the FruitService
        */

        fruitRouter.get('/fruit/:name', (request, response) => {
            FruitService.getFruit(request, response);
        });
        root.use(fruitRouter);
    }
}

module.exports = FruitRoutes;