const mongoose = require("mongoose");


const arguments = process.argv;

// The URL that we use to connect to MongoDB Atlas.
const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.mwtjn.mongodb.net/genericDatabase?retryWrites=true&w=majority";


// We use .connect to actually connect to the database. The .connect method needs three arguments, URL, options, and callback.
let connection = mongoose.connect(db, {useNewUrlParse: true, useFindAndModify: false, useUnifiedTopology: true}, (error) => {

    // Check if MongoDb gave us an error.
    if (error) {
        // If so, console log the rror.
        console.log("There was an error", error);
    } else {
        // If not, say sucessfully connected to database.
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    } 
}); 



// Grab a copy of what a "Schema" is from the mongoose package.
let Schema = mongoose.Schema;


// Customize our Schema so mongoose knows how the document should be "formatted"
let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});


// Create the model for mongoose, we look for a specific collection, and we are going to work with a specific schema.
let exampleModel = new mongoose.model("firstcollections", exampleSchema); 


// Create a new document and fill it with data. Must match how we designed our schema.
let exampleDocument = new exampleModel({
    username: arguments[2],
    password: arguments[3],
    created: Date.now(),
    age: arguments[4],
    accountClosed: false
});


// Create
// Callback will run when we get a message from MongoDB.
//this this information into our database, and will into the BSON file
exampleDocument.save((error) => {

    // We check if we got an error or not and console log accordingly.
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!");
    }

    // Once we saved this document, we have the option of closing the connection so we can end this script.
    //mongoose.connection.close();
    //console.log("connection closed!");
}); 



/*
let secondDocument = new exampleModel({
    username: "Ken",
    created: "Dec 3, 2020",
    age: 24,
    accountClosed: true,
    nickname: "K"
});

secondDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("saved!");
    }
});
*/

setTimeout(() => {
 mongoose.connection.close();
 console.log("connection closed!");
}, 5000);


///////////////////***IN THE GIT TERMINAL, SINCE WE ARE USING ARRAY, I need to type: node index.js Kenny 12345 18