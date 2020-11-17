// 11/17/2020 creating our express server (Our First Server using Express Package)


//Bring in the express package.
const express = require("express");
const { Server } = require("http");

//Run a copy of the express package.
const app = express();

//Connects our HTTP server with the Express web module.
const http = require("http").Server(app);


//Decide on the port number to listen on when running express Server.
// Do Not use 80, 443, 20, 21, 22, etc here.
const port = 3000;   //people use 3000 or 8080 for development purpose

//Tell http module that we will be listening on the number in the port variable.
http.listen(port);

console.log("Express server is now running on " + port);


//call a method on in
app.use("/",express.static("public_html/") );   //Tells Express to load the files from the public_html folder when someone requests / or nothing

// A "second" website accessed only if you type localhost:3000/portfolio
app.use("/portfolio",express.static("portfolio/") );  // another example path:   / ==> go to website path   ;    "portfolio/" ==> go to directory