// 11/18/2020

//Bring in the express package.
const express = require("express");

//Bring in the body-parser package.
const bodyParser = require("body-parser");

//Run a copy of the express module.
const app = express();

//Connects our HTTP server with the Express web module.
const http = require("http").Server(app);

// Decide on the port number to listen on when running Express server.
// DO NOT USE 80, 443, 20, 21, 22, etc.
const port = 3000;

// Tell http module that we will be listening on the number in the port variable.
http.listen(port);

//Body parser so we can automatically convert request objects. 11/10/2020
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is now running on " + port);

//Tells Express to load the files from the public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/") );

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio", express.static("portfolio/"));


// Handling any POST requests with the name of "sayHello".
// We have the request and response parameters in our callback function to have a reference of where to get and send data.
app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");



    // 11/19/2020 Math.floor ==> round up the number?
    let winningNumber = Math.floor((Math.random() * 10) +1);
    console.log(winningNumber);


    

    // this is added on 11/19/2020
    let dataFromFront = request.body;
    //console.log("The visitor sent the following number ", dataFromFront);



    // this is added on 11/19/2020
    let userNumberChoice = parseInt(dataFromFront.number);

    let userWinner = false;

    console.log(winningNumber, userNumberChoice);

    if (winningNumber === userNumberChoice) {
        userWinner = true;
    }



    // Build an object to send back to whoever requested this specific POST method.
    let responseObject = {
        results: userWinner
    };

    // Send the object to the requester.
    response.send(responseObject);
});