const path = require("path");
const FruitData = require(path.resolve(__dirname, "fruit-data"));
const ErrorService = require(path.resolve(__dirname, "error-gen-service"));

/*
 * Service responsible for handling the fruit inventory primarily retrieving for the user.
 * For simplicity this is a static class with all static async methods, to avoid considerations about
 * instaniations and multi instance management.
 */
class FruitService {
    /**
    * constructor - since a class with static async methods basically a no op.
    **/
    FruitService() { }

    /**
    * Retrieves all fruits in the system asynchronously @see async.
    *
    * @throws @see Error - When the database is down.
    *
    * @returns A javascript object containing indexed entries of fruit @see fruit-data.json
    *
    * @example
    * {
    * "Mango": {
    * "category": "fruit",
    * "quantity": 36,
    * "price": 2
    * }
    * }
    */
    static async getAllFruits(request, response) {
        try {
            ErrorService.simulateRandomDatabaseDown();
            response.status(200).json(await FruitData.inventory);
        } catch (error) {
            console.log(error.message);
            response.status(500).json(error.message);
        }
    }

    /**
    * Retrieves a specific fruit by name asynchonously @see async.
    *
    * @param name the name of the fruit, this is the index key in @see fruit-data.json
    * @example 'Apple'
    * @note fruit name is case sensitive an area of improvement for this method :}
    *
    * @returns The fruit entry javascript object or undefined if not found.
    */
    static async getFruit(request, response) {
        response.json(await FruitData.inventory[request.params.name]);
    }
}

module.exports = FruitService;