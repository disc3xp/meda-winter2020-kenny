// 12/4/2020 update.js
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



//https://mongoosejs.com/docs/queries.html
// Find a specific document based on the ID, and provide the data we want to update as an object in the second argument, and run a callback function when database responds. Note that the database will return the ORIGINAL document, before it was updated.
exampleModel.findByIdAndUpdate("5fc7e7544ba4fa1ba8e9c660", {age: 99}, (error, results) => {
    if (error) {
        console.log("There was an error.", error);
    } else {
        console.log("Document was updated! This is the original documents :", results);
    }
});