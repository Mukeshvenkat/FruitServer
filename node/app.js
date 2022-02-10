const express = require("express");
const FruitRoutes = require("./fruit-routes");
const CartRoutes = require("./cart-routes");
const bodyParser = require("body-parser");
var cors = require('cors')


const app = express();
const port = process.env.PORT || 1234;

const apiRoutes = express.Router();

// TODO-1: need to npm install and run to start up this fruit server

// setup the fruit routes
FruitRoutes.setup(apiRoutes);
CartRoutes.setup(apiRoutes);

app.use(cors());
app.use(bodyParser.json());

// all REST api calls should be under api
app.use("/api", apiRoutes);

// basic get route for the system
app.get("/", (req, res) => {
    res.send("Welcome to fruit server 1.0.0");
});

// listening on the nodemon port configured in @see package.json
app.listen(port, (req, res) => {
    console.log(
        `fruit server started from nodemon and listening at http://localhost:${port}`
    );
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Authorization, Access-Control-Allow-Headers, Content-Type, Accept, token, environment, username, roleid");
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }
    else {
        //move on
        next();
    }
});

app.use(function (req, res, next) {
    next(createError(404));
});

// Custom Error handler for fruit server
app.use(function (err, req, res, next) {
    // TODO-5: handle common errors
    res.status(err.status || 500);
    res.json({
        status: 'error',
        data: err.message,
        message: 'Something went wrong!!! Please try again later.'
    });
});

// process.on('uncaughtException', (err, origin) => {
//     // fs.writeSync(
//     //     'ExceptionError.log',
//     //     `Caught exception: ${err}\n` +
//     //     `Exception origin: ${origin}`
//     // );
// });
// process.on('unhandledRejection', (err, origin) => {
//     //  fs.writeSync(
//     //     'ExceptionError.log',
//     //     `Caught exception: ${err}\n` +
//     //     `Exception origin: ${origin}`
//     // );
// });