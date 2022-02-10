const express = require("express");
const CartService = require("./cart-service");

class CartRoutes {

    /**
    * Setups the routes for cart related REST api calls
    */
    static setup(root) {
        const cartRouter = express.Router();

        cartRouter.post('/purchase', (request, response, next) => {
            CartService.purchase(request, response, next);
        });

        root.use(cartRouter);
    }
}

module.exports = CartRoutes;