// 12/4/2020 read.js
const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.mwtjn.mongodb.net/genericDatabase?retryWrites=true&w=majority";


let connection = mongoose.connect(db, {useNewUrlParse: true, useFindAndModify: false, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.log("There was an error", error);
    } else {
        console.log("Successfully connected to MongoDB Database genericDatabase.");
    } 
}); 


let exampleSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("firstcollections", exampleSchema); 


// Read from firstcollections collection.
//.find method , need 2 arguments: object and callback
// The first argument is the "search parameters", the second paramter is xxxxxxxxxxxxxxxx
exampleModel.find({username: "Ryu", age: 30},(error, results) => {
    if (error) {
        console.log("There was an error reading the database.", error);
    } else {
        console.log("Successfully read the database.");
        console.log("We found something!", results);
    }
});  


